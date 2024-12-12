const e=document.querySelector(".js-card-container");function u(u){let t=function({abilities:e,sprites:u,name:t,weight:r,height:a}){let c=e.map(e=>`<li>${e.ability.name}</li>`).join("");return`
    <div class="card">
  <div class="card-img-top">
    <img src="${u.front_default}" alt="${t}">
  </div>
  <div class="card-body">
    <h2 class="card-title">\u{418}\u{43C}\u{44F}: ${t}</h2>
    <p class="card-text">\u{412}\u{435}\u{441}: ${r}</p>
    <p class="card-text">\u{420}\u{43E}\u{441}\u{442}: ${a}</p>

    <p class="card-text"><b>\u{423}\u{43C}\u{435}\u{43D}\u{438}\u{44F}</b></p>
    <ul>${c}</ul>
   
  </div>
</div>
    
    `}(u);e.innerHTML=t}function t(e){alert(`\u{1F62E}\u{1F62E}\u{423}\u{43F}\u{441}, \u{447}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}!!!!!, Error: ${e}`)}document.querySelector(".js-search-form").addEventListener("submit",function(r){var a;r.preventDefault();let c=r.currentTarget,i=c.elements.query.value;e.innerHTML='<div class="loader"></div>',(a=i,fetch(`https://pokeapi.co/api/v2/pokemon/${a}`).then(e=>e.json())).then(u).catch(t).finally(()=>{c.reset(),function(){let u=e.querySelector(".loader");u&&u.remove()}()})});
//# sourceMappingURL=08-HTTP.0e843410.js.map
