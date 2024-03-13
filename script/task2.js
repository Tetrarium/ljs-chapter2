"use strict";

const checkTask2 = document.querySelector('.check__task2');

function checkSign() {
  const num = +prompt('Введите число');

  if (num > 0) {
    alert(1);
  } else if (num < 0) {
    alert(-1);
  } else {
    alert(0);
  }
}

checkTask2.addEventListener('click', checkSign);
