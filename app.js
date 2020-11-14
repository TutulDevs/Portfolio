const btn = document.querySelector('.toggler');
const main = document.querySelector('.main');
const menuBtn = document.querySelector('.menu__btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
}

);

menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu__active');
});