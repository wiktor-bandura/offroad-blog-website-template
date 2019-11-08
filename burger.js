const menuItems = [...document.querySelectorAll('.menu-item')];
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger-box');

hamburger.addEventListener('click', () => {
    menu.classList.add('visible');
});
close.addEventListener('click', () => {
    menu.classList.remove('visible');
});
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('visible');
    })
})