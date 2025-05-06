const navMenu = document.querySelector('.nav-menu');
const menuToggleMobile = document.querySelector('.menu-mobile');
const menuToggleDesktop = document.querySelector('.menu-desktop');
const header = document.getElementById('header');
let menuOpen = false;

window.addEventListener('scroll', () => {
    const isMobile = window.innerWidth <= 768;

    if (window.scrollY > 50) {
        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            header.classList.add('scrolled');
            navMenu.classList.add('hidden');
            navMenu.classList.remove('show');
        }

        if (menuOpen) {
            menuOpen = false;
            header.classList.remove('menu-open');
        }

        if (isMobile) {
            menuToggleMobile.classList.add('show');
            menuToggleDesktop.classList.remove('show');
        } else {
            menuToggleDesktop.classList.add('show');
            menuToggleMobile.classList.remove('show');
        }
    } else {
        header.classList.remove('scrolled');
        navMenu.classList.remove('hidden');
        navMenu.classList.add('show');
        menuToggleMobile.classList.remove('show');
        menuToggleDesktop.classList.remove('show');
        menuOpen = false;
        header.classList.remove('menu-open');
    }
});

function toggleMenu() {
    menuOpen = !menuOpen;
    navMenu.classList.toggle('hidden', !menuOpen);
    navMenu.classList.toggle('show', menuOpen);
    header.classList.toggle('menu-open', menuOpen);

    if (!menuOpen && window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}