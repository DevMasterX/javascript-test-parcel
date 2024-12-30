const e=document.querySelector(".js-list"),t=document.querySelector(".js-load");let n=1;function o(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=345007f9ab440e5b86cef51be6397df1&page=${e}`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()})}function r(e){return e.map(({poster_path:e,title:t})=>`
   <li>
        <img src="https://image.tmdb.org/t/p/w400${e}" alt="${t}" />
        <h2>${t}</h2>
      </li>
    `).join("")}t.addEventListener("click",function(){o(n+=1).then(t=>e.insertAdjacentHTML("beforeend",r(t.results))).catch(e=>console.log(e))}),o().then(t=>{e.insertAdjacentHTML("beforeend",r(t.results))}).catch(e=>console.log(e));
//# sourceMappingURL=pagination-1.e7d28a20.js.map
