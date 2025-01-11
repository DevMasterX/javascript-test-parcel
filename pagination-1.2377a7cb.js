const e=document.querySelector(".js-guard"),t=document.querySelector(".js-list");let o=1;const r=new IntersectionObserver(function(r,c){r.forEach(r=>{r.isIntersecting&&s(o+=1).then(o=>{t.insertAdjacentHTML("beforeend",n(o.results)),o.page===o.total_pages&&c.unobserve(e)}).catch(e=>console.log(e))})},{root:null,rootMargin:"200px",threshold:1});function n(e){return e.map(({poster_path:e,title:t})=>`
      <li>
        <img src="https://image.tmdb.org/t/p/w400${e}" alt="${t}" />
        <h2>${t}</h2>
      </li>
    `).join("")}function s(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=345007f9ab440e5b86cef51be6397df1&page=${e}`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()})}s().then(o=>{t.insertAdjacentHTML("beforeend",n(o.results)),r.observe(e)}).catch(e=>console.log(e));
//# sourceMappingURL=pagination-1.2377a7cb.js.map
