const menuHamburger = document.querySelector(".menu__hamburger");
const menuList = document.querySelector(".nav__list");
let isMenuOpen = false;

menuHamburger.addEventListener("click", () => {
	toggleMenu();
});

document.addEventListener("click", () => {
	if (event && event.target !== menuList) {
		closeMenu();
	}
});

function toggleMenu() {
	isMenuOpen = !isMenuOpen;
	menuList.classList.toggle("open");
	menuHamburger.classList.toggle("menu__hamburger-open");
}

function closeMenu() {
	isMenuOpen
		? (isMenuOpen = false)
		: menuList.classList.remove("open") ||
		  menuHamburger.classList.remove("menu__hamburger-open");
}

document.addEventListener("keydown", (e) => {
	e.key === "Escape" ? closeMenu() : null;
});
