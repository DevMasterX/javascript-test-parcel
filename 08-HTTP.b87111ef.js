var e={fetchPokemon:function(e){return fetch(`https://pokeapi.co/api/v2/pokemon/${e}`).then(e=>e.json())}};console.log("\uD83D\uDE80  API:",e);const t=document.querySelector(".js-card-container");function u(e){let u=function({abilities:e,sprites:t,name:u,weight:n,height:c}){let o=e.map(e=>`<li>${e.ability.name}</li>`).join("");return`
    <div class="card">
  <div class="card-img-top">
    <img src="${t.front_default}" alt="${u}">
  </div>
  <div class="card-body">
    <h2 class="card-title">\u{418}\u{43C}\u{44F}: ${u}</h2>
    <p class="card-text">\u{412}\u{435}\u{441}: ${n}</p>
    <p class="card-text">\u{420}\u{43E}\u{441}\u{442}: ${c}</p>

    <p class="card-text"><b>\u{423}\u{43C}\u{435}\u{43D}\u{438}\u{44F}</b></p>
    <ul>${o}</ul>
   
  </div>
</div>
    
    `}(e);t.innerHTML=u}function n(e){alert(`\u{1F62E}\u{1F62E}\u{423}\u{43F}\u{441}, \u{447}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}!!!!!, Error: ${e}`)}document.querySelector(".js-search-form").addEventListener("submit",function(c){c.preventDefault();let o=c.currentTarget,r=o.elements.query.value;t.innerHTML='<div class="loader"></div>',e.fetchPokemon(r).then(u).catch(n).finally(()=>{o.reset(),function(){let e=t.querySelector(".loader");e&&e.remove()}()})}),fetch("https://pokeapi.co/api/v2/pokemon?limit=50").then(e=>e.json()).then(console.log);
//# sourceMappingURL=08-HTTP.b87111ef.js.map
