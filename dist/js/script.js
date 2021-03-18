'use stricte';

const btn = document.querySelector('#more');
const promo = document.querySelector('.advantages');

btn.addEventListener('click', () => {
    promo.classList.toggle('ghost');
})