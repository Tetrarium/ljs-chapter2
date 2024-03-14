"use strict";

const checkTask5 = document.querySelector('.check__task5');

function getEvens() {
  let result = [];

  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  alert(result);
}

checkTask5.addEventListener('click', getEvens);
