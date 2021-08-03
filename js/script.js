window.addEventListener('DOMContentLoaded', () => {
	let burger = document.querySelector('.header__burger');
	let header_menu = document.querySelector('.header__menu');

	burger.addEventListener('click', function () {
		this.classList.toggle("active");
		header_menu.classList.toggle("active");
	});
});