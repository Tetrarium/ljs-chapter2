"use strict";

const checkTask1 = document.querySelector('.check__task1');

function whatOfficialName() {
  const QUESTION = 'Какое «официальное» название JavaScript?';
  const ANSWER = 'ECMAScript';
  const RESPOND_TRUE = 'Верно!';
  const RESPOND_FALSE = 'Не знаете? ECMAScript!';

  const userAnswer = prompt(QUESTION, '');

  if (userAnswer === ANSWER) {
    alert(RESPOND_TRUE);
  } else {
    alert(RESPOND_FALSE);
  }
}

checkTask1.addEventListener('click', whatOfficialName);
