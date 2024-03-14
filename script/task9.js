"use strict";

const checkTask9 = document.querySelector('.check__task9');

function checkBrowser(browser) {
  if (browser === 'Edge') {
    return "You've got the Edge!";
  } else if (
    browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera'
  ) {
    return 'Okay we support these browsers too';
  } else {
    return 'We hope that this page looks ok!';
  }
}

function check9() {
  const value = prompt('Введите используемый браузер');

  const result = checkBrowser(value);
  alert(result);
}

checkTask9.addEventListener('click', check9);
