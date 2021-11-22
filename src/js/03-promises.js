import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';

const formEL = document.querySelector('.form');
formEL.addEventListener('submit', onSubmitForm);

function onSubmitForm (event) {
  event.preventDefault();

  let firstStep = Number(event.currentTarget.elements.delay.value);
  const delayStep = Number(event.currentTarget.elements.step.value);
  const amount = Number(event.currentTarget.elements.amount.value);

  for(let i = 1; i <= amount; i++) {
    createPromise(i, firstStep)
      .then(({position, delay}) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({position, delay}) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));

      firstStep += delayStep;
    }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
}