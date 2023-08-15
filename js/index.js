const menuHamburger = document.querySelector(".menu__hamburger");
const menuList = document.querySelector(".nav__list");
let isMenuOpen = false;

menuHamburger.addEventListener("click", () => {
	isMenuOpen = !isMenuOpen;
	menuList.classList.toggle("open");
	menuHamburger.classList.toggle("menu__hamburger-open");


});
