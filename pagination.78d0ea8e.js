const e={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},r=new class{fetchArticles(){return fetch(`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`,{headers:{Authorization:"53234c7a30c3487e8bcad8ad4e056dba"}}).then(e=>e.json()).then(e=>(this.incrementPage(),e.articles))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};function t(r){e.articlesContainer.insertAdjacentHTML("beforeend",r?r.map(({url:e,urlToImage:r,title:t,author:a,description:n})=>`
   <li>
        <a href="${e}" target = '_blank' rel='noopener noreferrer' >
          <article>
            <img src="${r}" alt="" width='480' />
            <h2>${t}</h2>
            <p>Posted by: ${a}</p>
            <p>${n}</p>
          </article>
        </a>
      </li>
    `).join(""):alert("No articles found!!!"))}e.searchForm.addEventListener("submit",function(a){a.preventDefault(),r.query=a.currentTarget.elements.query.value,""===r.query&&console.log("Error"),r.resetPage(),r.fetchArticles().then(r=>{e.articlesContainer.innerHTML="",t(r)})}),e.loadMoreBtn.addEventListener("click",function(){r.fetchArticles().then(e=>t(e))});
//# sourceMappingURL=pagination.78d0ea8e.js.map
