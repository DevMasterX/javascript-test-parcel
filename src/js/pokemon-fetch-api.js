import '../css/common.css';
import createTemplate from './pokemonCardTemplate';
import API from './api-service';

const cardContainer = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-search-form');

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const pokemonId = form.elements.query.value;

  showLoader();

  API.fetchPokemon(pokemonId)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => {
      form.reset();
      hideLoader();
    });
}

function renderPokemonCard(pokemon) {
  const markup = createTemplate(pokemon);
  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert(`😮😮Упс, что-то пошло не так!!!!!, Error: ${error}`);
}

function showLoader() {
  cardContainer.innerHTML = '<div class="loader"></div>';
}

function hideLoader() {
  const loader = cardContainer.querySelector('.loader');
  if (loader) loader.remove();
}

// -----------------------------------
fetch(
  'https://pixabay.com/api/?key=39861298-38e1e10cd9c08fce6ef5c3957&q=yellow+flowers&image_type=photo'
)
  .then(r => r.json())
  .then(console.log);
