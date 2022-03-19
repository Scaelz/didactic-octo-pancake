const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-list__item');

burger.addEventListener('click', (e) => {
    menu.classList.toggle('menu-active');
    e.stopPropagation();
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu-active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
        menu.classList.remove('menu-active');
    }
});
