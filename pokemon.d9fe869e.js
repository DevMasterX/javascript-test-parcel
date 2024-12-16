const e=document.querySelector(".js-card-container");function t(t){let u=function({abilities:e,sprites:t,name:u,weight:c,height:a}){let r=e.map(e=>`<li>${e.ability.name}</li>`).join("");return`
    <div class="card">
  <div class="card-img-top">
    <img src="${t.front_default}" alt="${u}">
  </div>
  <div class="card-body">
    <h2 class="card-title">\u{418}\u{43C}\u{44F}: ${u}</h2>
    <p class="card-text">\u{412}\u{435}\u{441}: ${c}</p>
    <p class="card-text">\u{420}\u{43E}\u{441}\u{442}: ${a}</p>

    <p class="card-text"><b>\u{423}\u{43C}\u{435}\u{43D}\u{438}\u{44F}</b></p>
    <ul>${r}</ul>
   
  </div>
</div>
    
    `}(t);e.innerHTML=u}function u(e){alert(`\u{1F62E}\u{1F62E}\u{423}\u{43F}\u{441}, \u{447}\u{442}\u{43E}-\u{442}\u{43E} \u{43F}\u{43E}\u{448}\u{43B}\u{43E} \u{43D}\u{435} \u{442}\u{430}\u{43A}!!!!!, Error: ${e}`)}document.querySelector(".js-search-form").addEventListener("submit",function(c){var a;c.preventDefault();let r=c.currentTarget,i=r.elements.query.value;e.innerHTML='<div class="loader"></div>',(a=i,fetch(`https://pokeapi.co/api/v2/pokemon/${a}`).then(e=>e.json())).then(t).catch(u).finally(()=>{r.reset(),function(){let t=e.querySelector(".loader");t&&t.remove()}()})}),fetch("https://pixabay.com/api/?key=39861298-38e1e10cd9c08fce6ef5c3957&q=yellow+flowers&image_type=photo").then(e=>e.json()).then(console.log);
//# sourceMappingURL=pokemon.d9fe869e.js.map
