let menuButton = document.querySelector(".button-nav");

let menuButtonActive = document.querySelector(".button-nav-active");

let menu = document.querySelector(".navigation");

menuButton.addEventListener("click", function () {
	menuButton.style.display = "none";
	menu.style.display = "block";
});

menuButtonActive.addEventListener("click", function () {
	menu.style.display = "none";
	menuButton.style.display = "block";
});

var menuButtonMobile = document.querySelector(".menu-button-mobile");

var menuMobile = document.querySelector(".navigation-mobile");

menuButtonMobile.addEventListener("click", function () {
	menuMobile.classList.toggle("navigation-mobile-active");

	menuButtonMobile.classList.toggle("menu-button-mobile-active");
});
