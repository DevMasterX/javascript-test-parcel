import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';
import 'basiclightbox/dist/basicLightbox.min.css';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list);

list.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('js-info')) {
    const { id } = e.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    createModal(product);
  }
}
function findProduct(productID) {
  return instruments.find(({ id }) => id === productID);
}
