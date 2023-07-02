const btn = document.querySelector('.menu');
const menu = document.querySelector('.menu-slide');
const close = document.querySelector('.menu-slide__close');

btn.addEventListener('click', function() {
  menu.style.right = '0';
})

close.addEventListener('click', function() {
  menu.style.right = '-100%';
})