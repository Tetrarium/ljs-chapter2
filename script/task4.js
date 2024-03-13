"use strict";

const checkTask4 = document.querySelector('.check__task4');

function greeting() {
  const login = prompt('Введите логин');

  const message = login === 'Сотрудник'
    ? 'Привет'
    : login === 'Директор'
      ? 'Здравствуйте'
      : login === ''
        ? 'Нет логина'
        : '';

  alert(message);
}

checkTask4.addEventListener('click', greeting);
