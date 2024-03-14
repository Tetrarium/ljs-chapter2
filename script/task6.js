"use strict";

const checkTask6 = document.querySelector('.check__task6');

function check6() {
  let i = 0;
  while (i < 3) {
    alert(`number ${i}`);
    i++;
  }
}

checkTask6.addEventListener('click', check6);
