function adjustTextPosition() {
    const textElement = document.querySelectorAll('.title');
    const textoElement = document.querySelectorAll('.minus');
    const buttonElement = document.querySelectorAll('.btnn');
    const viewportWidth = window.innerWidth;
    const navbar = document.querySelector('.header');
    const menuIcon = document.querySelector(".menu-icon");
    const logo = document.querySelector('.logo');
    const headerMiddle = document.querySelector('.header-middle');

    const scaledValue = Math.max(5, (viewportWidth - (screen.width / 2)) / ((screen.width * 1.45) - screen.width / 2) * 50);

    textElement.forEach(element => {
        element.style.left = `${scaledValue}vw`;
    });

    textoElement.forEach(element => {
        element.style.left = `${scaledValue}vw`;
    });

    buttonElement.forEach(element => {
        element.style.left = `${scaledValue}vw`;
    });

    navbar.style.left = `${scaledValue}vw`;

    const logoWidth = logo ? logo.offsetWidth : 0;
    const headerMiddleWidth = headerMiddle ? headerMiddle.offsetWidth : 0;
    const navbarLeft = parseFloat(navbar.style.left) || 0; 

    const margin = 45;
        
    const menuScaledValue = viewportWidth - (viewportWidth * scaledValue / 100) - logoWidth - headerMiddleWidth - 70 - margin;

    menuIcon.style.marginLeft = `${menuScaledValue}px`;
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
    if (window.scrollY > 50) { // Cache la flèche après un léger scroll
        arrow.classList.add("hidden");
    } else {
        arrow.classList.remove("hidden");
    }
});

