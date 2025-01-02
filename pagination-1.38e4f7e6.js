const e=document.querySelector(".js-guard"),t=document.querySelector(".js-list");let r=1;const o=new IntersectionObserver(function(o,c){o.forEach(o=>{o.isIntersecting&&s(r+=1).then(r=>{t.insertAdjacentHTML("beforeend",n(r.results)),r.page===r.total_pages&&ubserver.unobserve(e)}).catch(e=>console.log(e))})},{root:null,rootMargin:"200px",threshold:1});function n(e){return e.map(({poster_path:e,title:t})=>`
   <li>
        <img src="https://image.tmdb.org/t/p/w400${e}" alt="${t}" />
        <h2>${t}</h2>
      </li>
    `).join("")}function s(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=345007f9ab440e5b86cef51be6397df1&page=${e}`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()})}s().then(r=>{t.insertAdjacentHTML("beforeend",n(r.results)),o.observe(e)}).catch(e=>console.log(e));
//# sourceMappingURL=pagination-1.38e4f7e6.js.map
