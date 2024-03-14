"use strict";

const checkTask8 = document.querySelector('.check__task8');

function getSimples(n) {
  const simples = [];
  cicle: for (let i = 2; i <= n; i++) {
    const max = Math.sqrt(i);
    for (let j = 2; j < max; j++) {
      if (i % j === 0) {
        continue cicle;
      }
    }
    simples.push(i);
  }

  return simples;
}

function check8() {
  let value;

  while (true) {
    value = +prompt('Введите число больше либо равно 2');

    if (value >= 2) {
      break;
    }
  }
  const timestamp = Date.now();
  const simples = getSimples(value);
  console.log(Date.now() - timestamp);

  alert(simples.join(', '));
}

checkTask8.addEventListener('click', check8);

/**
 * Врмя выполнения getSimples(n) для двух вариантов исполнения
 * вложенного цикла
 *      n   | j = [ 2, i ] | j = [ 2, Math.sqrt(i) )
 *   100000 |         1214 |      9
 *   200000 |         4570 |     20
 *   300000 |         9901 |     36
 *   400000 |        17235 |     55
 *  1000000 |           -- |    188
 * 10000000 |           -- |   4757
 */

const comparisonTableSimples = document.getElementById('comp-simples');

const comparisonSimplesCells = comparisonTableSimples.querySelectorAll('td');
comparisonSimplesCells.forEach(elem =>
  elem.textContent = Number(elem.textContent)
    ? Number(elem.textContent).toLocaleString()
    : elem.textContent);
