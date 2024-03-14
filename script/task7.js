"use strict";

const checkTask7 = document.querySelector('.check__task7');

function check7() {
  let question = 'Введите число больше 100';
  while (true) {
    const value = prompt(question);
    if (value > 100) {
      alert('Правильно!');
      break;
    }
    if (value === null) {
      break;
    }
    question = 'Не правильно! Введите еще раз число больше 100';
  }
}

checkTask7.addEventListener('click', check7);
