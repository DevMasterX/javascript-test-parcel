import '../css/common.css';
import * as BSN from 'bootstrap.native';

const PROMPT_DELAY = 2000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const subscribeBtn = document.querySelector('button[data-subscribe]');
const modalElement = document.getElementById('subscription-modal');
const modal = new BSN.Modal(modalElement);
const closeButton = modalElement.querySelector('[data-dismiss="modal"]');

openModal();

closeButton.addEventListener('click', () => {
  modal.hide();
});
subscribeBtn.addEventListener('click', onSubscribeBtnClick);
modalElement.addEventListener('hide.bs.modal', openModal);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    return;
  }
  setTimeout(() => {
    modal.show();
    promptCounter++;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}

// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//     console.log('Stop interval');
//     clearInterval(intervalId);
//     return;
//   }

//   console.log('Подпишись на рассылку!!', +Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);
