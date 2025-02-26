import '../css/common.css';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

search.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();
  const { query, days, language } = evt.currentTarget.elements;

  getWeather(query.value, days.value, language.value)
    .then(data => (list.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch(err => console.log(err));
}

function getWeather(city, days, language) {
  const BASE_URL = 'https://api.weatherapi.com/v1';
  const API_KEY = '1f583b8645b54c449e5214937241512';

  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=${language}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li>
  <img src="${icon}" alt="${text}">
  <p>${text}</p>
  <h2>${date}</h2>
  <h3>Avg temp: ${avgtemp_c} C</h3>
</li> `
    )
    .join('');
}
