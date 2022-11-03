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

let maxPostion = refs.amount.value;



refs.form.addEventListener('submit', onBtnCreatePrClick);


function createPromise(position, delay) {
   delay = Number(refs.delay.value);
   let step =refs.step.value;
  //  delay+=step;
  
  position=+1;
  if(position ===maxPostion) {
    clearInterval(timerId);
    return;
  }
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    timerId = setInterval(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};



function onBtnCreatePrClick(e) {
  e.preventDefault();
  
  createPromise()
  .then(result => {
    Notiflix.Notify.success(result);
  })
  .catch(error => {
    Notiflix.Notify.failure(error);
  });
  
}