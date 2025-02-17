function adjustTextPosition() {
    const textElement = document.querySelectorAll('.title');
    const textLeft = document.querySelectorAll('.text-left');
    const textoElement = document.querySelectorAll('.minus');
    const titlexy = document.querySelector('.titlxy');
    const minusx = document.querySelector('.minusx');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const navbar = document.querySelector('.header');
    const menuIcon = document.querySelector(".menu-icon");
    const logo = document.querySelector('.logo');
    const headerMiddle = document.querySelector('.header-middle');

    const scaledValue = Math.max(5, (viewportWidth - (screen.width / 2)) / ((screen.width * 1.45) - screen.width / 2) * 50);

    navbar.style.left = `${scaledValue}vw`;

    const titleWidth = titlexy ? titlexy.offsetWidth : 0;
    const titleHeight= titlexy ? titlexy.offsetHeight : 0;
    const logoWidth = logo ? logo.offsetWidth : 0;
    const headerMiddleWidth = headerMiddle ? headerMiddle.offsetWidth : 0;
    const navbarLeft = parseFloat(navbar.style.left) || 0; 

    const margin = 45;
        
    const menuScaledValue = viewportWidth - (viewportWidth * scaledValue / 100) - logoWidth - headerMiddleWidth - 70 - margin;
    
    textElement.forEach(element => {
        element.style.left = `${scaledValue}vw`;
    });

    textoElement.forEach(element => {
        element.style.left = `${scaledValue}vw`;
    });

    textLeft.forEach(element => {
        element.style.left = `${scaledValue}vw`;
    });

    textLeft.forEach(element => {
        element.style.width = `${50 - scaledValue}vw`;
        element.style.marginTop = `${viewportHeight/2 - element.offsetHeight}px`;
    });

    menuIcon.style.marginLeft = `${menuScaledValue}px`;
    titlexy.style.marginLeft = `${viewportWidth/2 - titleWidth/2}px`;
    titlexy.style.marginTop = `${viewportHeight/2}px`;
    minusx.style.marginLeft = `${viewportWidth/2 - minusx.offsetWidth/2}px`;
    minusx.style.marginTop = `${viewportHeight/2 + titleHeight}px`;
}

window.addEventListener("resize", adjustTextPosition);
adjustTextPosition();
document.addEventListener("scroll", adjustTextPosition);

function toggleMenu() {
    let menu = document.getElementById("sideMenu");
    let menuIcon = document.querySelector(".menu-icon");
    let header = document.querySelector(".header");
    let overlay = document.getElementById("overlay");

    const isOpen = menu.style.right === "0px";

    menu.style.right = isOpen ? "-350px" : "0px";
    menuIcon.classList.toggle("open", !isOpen);
    header.classList.toggle("disabled", !isOpen);
    overlay.classList.toggle("active", !isOpen);

    menu.style.width = '250px';
}

document.getElementById("overlay").addEventListener("click", toggleMenu);

document.addEventListener("scroll", function () {
    let arrow = document.getElementById("arrow");
    if (window.scrollY > 50) {  
        arrow.classList.add("hidden");
    } else {
        arrow.classList.remove("hidden");
    }
});

document.addEventListener("scroll", function () {
  let stickyElement = document.querySelector(".sticky");
  let stopPosition = 3 * window.innerHeight; // 300vh

  if (window.scrollY >= stopPosition) {
    stickyElement.style.position = "absolute"; // Arrête l'effet sticky
    stickyElement.style.marginTop = "200vh";
  } else {
    stickyElement.style.position = "sticky"; // Reste sticky
    stickyElement.style.marginTop = "70vh";
  }
});

function openPage(url) {
    window.open(url, "_blank"); // Opens in a new tab
}
