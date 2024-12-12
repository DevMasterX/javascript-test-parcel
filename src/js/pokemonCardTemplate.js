export default function createTemplate({
  abilities,
  sprites,
  name,
  weight,
  height,
}) {
  const abilitiesMarkup = abilities
    .map(ability => `<li>${ability.ability.name}</li>`)
    .join('');

  return `
    <div class="card">
  <div class="card-img-top">
    <img src="${sprites.front_default}" alt="${name}">
  </div>
  <div class="card-body">
    <h2 class="card-title">Имя: ${name}</h2>
    <p class="card-text">Вес: ${weight}</p>
    <p class="card-text">Рост: ${height}</p>

    <p class="card-text"><b>Умения</b></p>
    <ul>${abilitiesMarkup}</ul>
   
  </div>
</div>
    
    `;
}
