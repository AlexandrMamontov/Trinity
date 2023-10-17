const up = document.querySelector('.pagination__up');
const down = document.querySelector('.pagination__down');

up.addEventListener('click', function() {
  window.scrollTo({
    top: window.scrollY - window.innerHeight,
    behavior: 'smooth'
  });
});

down.addEventListener('click', function() {
  window.scrollTo({
    top: window.scrollY + window.innerHeight,
    behavior: 'smooth'
  });
});

porsche = document.getElementById('porsche');
lambaUrus = document.getElementById('lambaUrus');
lambaHuracan = document.getElementById('lambaHuracan');
ferrari = document.getElementById('ferrari');
rollsRoyce = document.getElementById('rollsRoyce');

porsche.addEventListener('click', () => {
  document.querySelector('.porsche').classList.add('list__item--active');
  porsche.classList.add('list__btn--active');
  document.querySelector('.porsche__name').classList.add('list__name--active');
  document.querySelector('.porsche__descr').classList.add('list__descr--active');
  document.querySelector('.popular__auto').classList.add('opacity');
  setTimeout(() => {
    document.querySelector('.popular__auto').classList.remove('opacity');
  }, 400);
  setTimeout(() => {
    document.querySelector('.popular__auto').src = 'img/porsche.jpg';
  }, 400);
  document.querySelector('.lamba-urus').classList.remove('list__item--active');
  lambaUrus.classList.remove('list__btn--active');
  document.querySelector('.lamba-urus__name').classList.remove('list__name--active');
  document.querySelector('.lamba-urus__descr').classList.remove('list__descr--active');
  document.querySelector('.lamba-huracan').classList.remove('list__item--active');
  lambaHuracan.classList.remove('list__btn--active');
  document.querySelector('.lamba-huracan__name').classList.remove('list__name--active');
  document.querySelector('.lamba-huracan__descr').classList.remove('list__descr--active');
  document.querySelector('.ferrari').classList.remove('list__item--active');
  ferrari.classList.remove('list__btn--active');
  document.querySelector('.ferrari__name').classList.remove('list__name--active');
  document.querySelector('.ferrari__descr').classList.remove('list__descr--active');
  document.querySelector('.rolls-royce').classList.remove('list__item--active');
  rollsRoyce.classList.remove('list__btn--active');
  document.querySelector('.rolls-royce__name').classList.remove('list__name--active');
  document.querySelector('.rolls-royce__descr').classList.remove('list__descr--active');
})

lambaUrus.addEventListener('click', () => {
  document.querySelector('.porsche').classList.remove('list__item--active');
  porsche.classList.remove('list__btn--active');
  document.querySelector('.porsche__name').classList.remove('list__name--active');
  document.querySelector('.porsche__descr').classList.remove('list__descr--active');
  document.querySelector('.lamba-urus').classList.add('list__item--active');
  lambaUrus.classList.add('list__btn--active');
  document.querySelector('.lamba-urus__name').classList.add('list__name--active');
  document.querySelector('.lamba-urus__descr').classList.add('list__descr--active');
  document.querySelector('.popular__auto').classList.add('opacity');
  setTimeout(() => {
    document.querySelector('.popular__auto').classList.remove('opacity');
  }, 400);
  setTimeout(() => {
    document.querySelector('.popular__auto').src = 'img/lamba-urus.jpg';
  }, 400);
  document.querySelector('.lamba-huracan').classList.remove('list__item--active');
  lambaHuracan.classList.remove('list__btn--active');
  document.querySelector('.lamba-huracan__name').classList.remove('list__name--active');
  document.querySelector('.lamba-huracan__descr').classList.remove('list__descr--active');
  document.querySelector('.ferrari').classList.remove('list__item--active');
  ferrari.classList.remove('list__btn--active');
  document.querySelector('.ferrari__name').classList.remove('list__name--active');
  document.querySelector('.ferrari__descr').classList.remove('list__descr--active');
  document.querySelector('.rolls-royce').classList.remove('list__item--active');
  rollsRoyce.classList.remove('list__btn--active');
  document.querySelector('.rolls-royce__name').classList.remove('list__name--active');
  document.querySelector('.rolls-royce__descr').classList.remove('list__descr--active');
})

lambaHuracan.addEventListener('click', () => {
  document.querySelector('.porsche').classList.remove('list__item--active');
  porsche.classList.remove('list__btn--active');
  document.querySelector('.porsche__name').classList.remove('list__name--active');
  document.querySelector('.porsche__descr').classList.remove('list__descr--active');
  document.querySelector('.lamba-urus').classList.remove('list__item--active');
  lambaUrus.classList.remove('list__btn--active');
  document.querySelector('.lamba-urus__name').classList.remove('list__name--active');
  document.querySelector('.lamba-urus__descr').classList.remove('list__descr--active');
  document.querySelector('.lamba-huracan').classList.add('list__item--active');
  lambaHuracan.classList.add('list__btn--active');
  document.querySelector('.lamba-huracan__name').classList.add('list__name--active');
  document.querySelector('.lamba-huracan__descr').classList.add('list__descr--active');
  document.querySelector('.popular__auto').classList.add('opacity');
  setTimeout(() => {
    document.querySelector('.popular__auto').classList.remove('opacity');
  }, 400);
  setTimeout(() => {
    document.querySelector('.popular__auto').src = 'img/lamba-huracan.jpg';
  }, 400);
  document.querySelector('.ferrari').classList.remove('list__item--active');
  ferrari.classList.remove('list__btn--active');
  document.querySelector('.ferrari__name').classList.remove('list__name--active');
  document.querySelector('.ferrari__descr').classList.remove('list__descr--active');
  document.querySelector('.rolls-royce').classList.remove('list__item--active');
  rollsRoyce.classList.remove('list__btn--active');
  document.querySelector('.rolls-royce__name').classList.remove('list__name--active');
  document.querySelector('.rolls-royce__descr').classList.remove('list__descr--active');
})

ferrari.addEventListener('click', () => {
  document.querySelector('.porsche').classList.remove('list__item--active');
  porsche.classList.remove('list__btn--active');
  document.querySelector('.porsche__name').classList.remove('list__name--active');
  document.querySelector('.porsche__descr').classList.remove('list__descr--active');
  document.querySelector('.lamba-urus').classList.remove('list__item--active');
  lambaUrus.classList.remove('list__btn--active');
  document.querySelector('.lamba-urus__name').classList.remove('list__name--active');
  document.querySelector('.lamba-urus__descr').classList.remove('list__descr--active');
  document.querySelector('.lamba-huracan').classList.remove('list__item--active');
  lambaHuracan.classList.remove('list__btn--active');
  document.querySelector('.lamba-huracan__name').classList.remove('list__name--active');
  document.querySelector('.lamba-huracan__descr').classList.remove('list__descr--active');
  document.querySelector('.ferrari').classList.add('list__item--active');
  ferrari.classList.add('list__btn--active');
  document.querySelector('.ferrari__name').classList.add('list__name--active');
  document.querySelector('.ferrari__descr').classList.add('list__descr--active');
  document.querySelector('.popular__auto').classList.add('opacity');
  setTimeout(() => {
    document.querySelector('.popular__auto').classList.remove('opacity');
  }, 400);
  setTimeout(() => {
    document.querySelector('.popular__auto').src = 'img/ferrari.jpg';
  }, 400);
  document.querySelector('.rolls-royce').classList.remove('list__item--active');
  rollsRoyce.classList.remove('list__btn--active');
  document.querySelector('.rolls-royce__name').classList.remove('list__name--active');
  document.querySelector('.rolls-royce__descr').classList.remove('list__descr--active');
})

rollsRoyce.addEventListener('click', () => {
  document.querySelector('.porsche').classList.remove('list__item--active');
  porsche.classList.remove('list__btn--active');
  document.querySelector('.porsche__name').classList.remove('list__name--active');
  document.querySelector('.porsche__descr').classList.remove('list__descr--active');
  document.querySelector('.lamba-urus').classList.remove('list__item--active');
  lambaUrus.classList.remove('list__btn--active');
  document.querySelector('.lamba-urus__name').classList.remove('list__name--active');
  document.querySelector('.lamba-urus__descr').classList.remove('list__descr--active');
  document.querySelector('.lamba-huracan').classList.remove('list__item--active');
  lambaHuracan.classList.remove('list__btn--active');
  document.querySelector('.lamba-huracan__name').classList.remove('list__name--active');
  document.querySelector('.lamba-huracan__descr').classList.remove('list__descr--active');
  document.querySelector('.ferrari').classList.remove('list__item--active');
  ferrari.classList.remove('list__btn--active');
  document.querySelector('.ferrari__name').classList.remove('list__name--active');
  document.querySelector('.ferrari__descr').classList.remove('list__descr--active');
  document.querySelector('.rolls-royce').classList.add('list__item--active');
  rollsRoyce.classList.add('list__btn--active');
  document.querySelector('.rolls-royce__name').classList.add('list__name--active');
  document.querySelector('.rolls-royce__descr').classList.add('list__descr--active');
  document.querySelector('.popular__auto').classList.add('opacity');
  setTimeout(() => {
    document.querySelector('.popular__auto').classList.remove('opacity');
  }, 400);
  setTimeout(() => {
    document.querySelector('.popular__auto').src = 'img/rolls-royce.jpg';
  }, 400);
})


burger = document.querySelector('.main__burger');
menu = document.querySelector('.main__menu');
body = document.querySelector('body');

burger.addEventListener('click', () => {
  burger.classList.toggle('main__burger--active');
  menu.classList.toggle('main__menu--active');
  body.classList.toggle('hidden');
})
