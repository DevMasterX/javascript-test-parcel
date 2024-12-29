const e={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},t=new class{fetchArticles(){return fetch(`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`,{headers:{Authorization:"53234c7a30c3487e8bcad8ad4e056dba"}}).then(e=>e.json()).then(e=>(this.incrementPage(),e.articles))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.query}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};e.searchForm.addEventListener("submit",function(r){r.preventDefault(),t.query=r.currentTarget.elements.query.value,t.resetPage(),t.fetchArticles().then(t=>{e.articlesContainer.insertAdjacentHTML("beforeend",t.map(({url:e,urlToImage:t,title:r,author:a,description:n})=>`
   <li>
        <a href="${e}" target = '_blank' rel='noopener noreferrer' >
          <article>
            <img src="${t}" alt="" width='480' />
            <h2>${r}</h2>
            <p>Posted by: ${a}</p>
            <p>${n}</p>
          </article>
        </a>
      </li>
    `).join(""))})}),e.loadMoreBtn.addEventListener("click",function(){t.fetchArticles().then(e=>console.log(e))});
//# sourceMappingURL=pagination.be88005a.js.map
