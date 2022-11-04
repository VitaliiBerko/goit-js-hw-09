import Notiflix from 'notiflix';
function getEl(selector) {
  return document.querySelector(selector);
}

const refs = {
  form: getEl('.form'),
  delay: getEl('[name="delay"]'),
  step: getEl('[name="step"]'),
  amount: getEl('[name="amount"]'),
};

refs.form.addEventListener('submit', onBtnCreatePrClick);

function createPromise(position, delay) {
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
    }, delay);
  });
}

function onBtnCreatePrClick(e) {
  e.preventDefault();
  let step = Number(refs.step.value);
  let maxPostion = Number(refs.amount.value);
  let delay = Number(refs.delay.value);
  delay = delay - step;
  for (let position = 1; position <= maxPostion; position += 1) {
    delay += step;

    createPromise(position, delay)
      .then(result => {
        Notiflix.Notify.success(result);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
  }
}
