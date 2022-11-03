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
let position = 1;
let maxPostion = refs.amount.value;
let delay =refs.delay.value;

refs.form.addEventListener('submit', onBtnCreatePrClick);

// console.log(refs.form);
// console.log(refs.delay);
// console.log(refs.step);
// console.log(refs.amount);
// console.log(refs.step.value);
// console.log(maxPromCounter);


function createPromise(position, delay) {
  
  position=+1;
  if(position ===maxPostion) {
    clearInterval(timerId);
    return;
  }
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    });
  });
};

createPromise(position, delay)
  .then(result => {
    Notiflix.Notify.success(result);
  })
  .catch(error => {
    Notiflix.Notify.failure(error);
  });


function onBtnCreatePrClick(e) {
  e.preventDefault();
  timerId = setInterval(createPromise(), refs.step.value);
  form.reset();
}