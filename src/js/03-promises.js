import Notiflix from 'notiflix';
function getEl(selector) {
  return document.querySelector(selector);
}

const refs = {
  form: getEl('.form'),
  delay: getEl('[name="delay"]'),
  step: getEl('[name="step"]'),
  amount: getEl('[name="amount"]')
};


let timerId = null;
let promCounter = 0;
let maxPromCounter = refs.amount.value;


console.log(refs.form);
console.log(refs.delay);
console.log(refs.step);
console.log(refs.amount);

console.log(refs.step.value);
console.log(maxPromCounter);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve();
      } else {
        // Reject
        reject();
      }
    });
  });

};

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

refs.form.addEventListener('submit', onBtnCreatePrClick);

function onBtnCreatePrClick(e) {
  e.preventDefault();
  timerId = setInterval(createPromise(), refs.step.value);
}