// ======================
// UI RESPONSIVE HANDLING
// ======================
function adjustTextPosition() {
  const titles = document.querySelectorAll('.title');
  const subtitles = document.querySelectorAll('.minus');
  const descriptions = document.querySelectorAll('.description');
  const buttons = document.querySelectorAll('.btnn');
  const viewportWidth = window.innerWidth;
  const navbar = document.getElementById('header');
  const menuIcon = document.getElementById('menuIcon');
  const logo = document.getElementById('logo');
  const headerMiddle = document.querySelector('.header-middle');

  const scaledValue = Math.max(
    5,
    (viewportWidth - (screen.width / 2)) /
      ((screen.width * 1.45) - screen.width / 2) * 50
  );

  [...titles, ...subtitles, ...buttons, ...descriptions].forEach(el => {
    el.style.left = `${scaledValue}vw`;
  });

  navbar.style.left = `${scaledValue}vw`;

  const logoWidth = logo ? logo.offsetWidth : 0;
  const headerMiddleWidth = headerMiddle ? headerMiddle.offsetWidth : 0;
  const margin = 45;

  const menuScaledValue =
    viewportWidth -
    (viewportWidth * scaledValue / 100) -
    logoWidth -
    headerMiddleWidth -
    70 -
    margin;

  menuIcon.style.marginLeft = `${menuScaledValue}px`;
}

window.addEventListener("resize", adjustTextPosition);
document.addEventListener("scroll", adjustTextPosition);
window.addEventListener("load", adjustTextPosition);

// ======================
// MENU TOGGLE
// ======================
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const menuIcon = document.getElementById("menuIcon");
  const header = document.getElementById("header");
  const overlay = document.getElementById("overlay");

  const isOpen = menu.style.right === "0px";

  menu.style.right = isOpen ? "-350px" : "0px";
  menuIcon.classList.toggle("open", !isOpen);
  header.classList.toggle("disabled", !isOpen);
  overlay.classList.toggle("active", !isOpen);

  menu.style.width = '250px';
}

document.getElementById("overlay").addEventListener("click", toggleMenu);
document.getElementById("menuIcon").addEventListener("click", toggleMenu);

// ======================
// ARROW VISIBILITY ON SCROLL
// ======================
document.addEventListener("scroll", () => {
  const arrow = document.getElementById("arrow");
  if (!arrow) return;
  if (window.scrollY > 50) {
    arrow.classList.add("hidden");
  } else {
    arrow.classList.remove("hidden");
  }
});

// ======================
// EXTERNAL LINKS
// ======================
function openPage(url) {
  window.open(url, "_blank");
}

// ======================
// SECTION OBSERVER (Light vs Dark + Transition)
// ======================
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Cache immédiatement
      header.classList.add("hidden");

      // Attends la durée du hide
      setTimeout(() => {
        // Change couleur + logo
        if (entry.target.classList.contains("light-section")) {
          header.classList.add("dark");
          logo.src = "./images/logo-dark.svg";
        } else {
          header.classList.remove("dark");
          logo.src = "./images/logo.svg";
        }

        // Attends encore un petit délai avant de réafficher
        setTimeout(() => {
          header.classList.remove("hidden");
        }, 150); // délai supplémentaire avant réapparition

      }, 100); // durée du fade-out (synchro avec CSS)
    }
  });
}, { threshold: 0.1 });


sections.forEach(section => observer.observe(section));

