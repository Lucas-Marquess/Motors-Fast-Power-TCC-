const headerBtn = document.querySelector('.header .nav-bar .nav-list .header-btn');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

headerBtn.addEventListener('click', () => {
	headerBtn.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		headerBtn.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
	const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
	target.forEach(function(element) {
		if ((windowTop) > element.offsetTop) {
			element.classList.add(animationClass);
		} else {
			element.classList.remove(animationClass);
		}
	})
}


window.addEventListener('scroll', function() {
	animeScroll();
})
