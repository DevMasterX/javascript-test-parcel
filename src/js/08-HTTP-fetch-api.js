import '../css/common.css';

import Handlebars from 'handlebars';
const template = Handlebars.compile('Name: {{name}}');
console.log(template({ name: 'Nils' }));

import pokemonCardTpl from '../templates/pokemon-card.hbs';

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
  })
  .catch(error => {
    console.log(error);
  });
