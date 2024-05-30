import 'simplebar';
import 'simplebar/dist/simplebar.css';

const btnLang = document.getElementById('lang');
const burger = document.getElementById('burger');
const headerNav = document.getElementById('mobile-nav');
const closeMenu = document.getElementById('close-menu');

btnLang.addEventListener('click', () => {
    if(btnLang.textContent === 'EN') {
        btnLang.textContent = 'RU'
    } else {
        btnLang.textContent = 'EN'
    }
})

burger.addEventListener('click', () => {
    headerNav.classList.add('active');
    closeMenu.classList.add('active-burger');
    burger.classList.add('close-menu');
})

closeMenu.addEventListener('click', () => {
    burger.classList.remove('close-menu');
    headerNav.classList.remove('active');
    closeMenu.classList.remove('active-burger');
})
