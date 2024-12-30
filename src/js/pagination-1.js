// const BASE_URL = 'https://the-one-api.dev/v2/';
// const END_POINT = 'character';
// const KEY = 'LMgb5fgVZAxUFa2QvT_9';

// function getCharacter() {
//   const param = new URLSearchParams({
//     limit: 30,
//     page: 1,
//   });

//   const option = {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${KEY}`,
//     },
//   };

//   fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(response =>
//     console.log(response)
//   );
// }

// getCharacter();

const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
const API_KEY = '345007f9ab440e5b86cef51be6397df1';
const list = document.querySelector('.js-list');
const loadMore = document.querySelector('.js-load');

let currentPage = 1;

loadMore.addEventListener('click', onLoad);

function onLoad() {
  currentPage += 1;
  getTrending(currentPage)
    .then(data =>
      list.insertAdjacentHTML('beforeend', createMarkup(data.results))
    )
    .catch(err => console.log(err));
}

function getTrending(page = 1) {
  return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
}

getTrending()
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.results));
  })
  .catch(err => console.log(err));

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) => `
   <li>
        <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" />
        <h2>${title}</h2>
      </li>
    `
    )
    .join('');
}
