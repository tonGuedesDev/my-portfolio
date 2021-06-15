/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId)
	nav = document.getElementById(navId)

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu')
		})
	}
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(link => link.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActive)
/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader() {
	const header = document.getElementById('header')

	if (this.scrollY >= 537) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/ 
function scrollTop() {
	const scrollTop = document.getElementById('scroll-top')

	if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')

	console.log(this.scrollY)
}
window.addEventListener('scroll', scrollTop)

/*=====  ACORDION SKILLS =====*/ 
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
	let itemClass = this.parentNode.className

	for (i = 0; i < skillsContent.length; i++){
		skillsContent[i].className = 'skills__content skills-close'
	}
	if(itemClass === 'skills__content skills-close'){
		this.parentNode.className = 'skills__content skills-open'
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener('click', toggleSkills)
})
/*===== MIXITUP FILTER PORTFOLIO =====*/ 

/* Link active portfolio */ 


/*===== SWIPER CAROUSEL =====*/ 
let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    });

/*===== GSAP ANIMATION =====*/ 
gsap.from('.home__img', {opacity: 0, duration: 2, delay: .5, x: 60})
gsap.from('.home__data', {opacity: 0, duration: 2, delay: .5, y: 25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2})

gsap.from('.nav__logo, .nav_toggle', {opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.home__social-icon', {opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2})
