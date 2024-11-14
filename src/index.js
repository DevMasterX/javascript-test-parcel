import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';
import 'basiclightbox/dist/basicLightbox.min.css';

// const KEY_FAVORITE = 'favorite';
// const KEY_BASKET = 'basket';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

//  {
//     id: 8,
//     img: 'https://static.dnipro-m.ua/cache/products/2741/catalog_origin_271775.jpg',
//     name: 'Генератор',
//     price: 10890,
//     description:
//       'Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.',
//   },
createMarkup(instruments, list);
list.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('js-info')) {
    const { id } = e.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    createModal(product);
  }
  if (e.target.classList.contains('js-basket')) {
    const { id } = e.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));

    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }

    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }

  if (e.target.classList.contains('js-favorite')) {
    const { id } = e.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));

    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }

    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

function findProduct(productID) {
  return instruments.find(({ id }) => id === productID);
}
