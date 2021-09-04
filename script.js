'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');
const openmodal = function () {
  //   console.log('button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closemodel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

console.log(btnOpen);
for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener('click', openmodal);
}

btnClosemodal.addEventListener('click', closemodel);

overlay.addEventListener('click', closemodel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closemodel();
  }
});
