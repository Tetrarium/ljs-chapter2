"use strict";

const checkTask3 = document.querySelector('.check__task3');

function quantityEstimation() {
  let a = +prompt('Введите первое число');
  let b = +prompt('Введите второе число');

  const result = a + b < 4
    ? 'Мало'
    : 'Много';

  alert(result);
}

checkTask3.addEventListener('click', quantityEstimation);
