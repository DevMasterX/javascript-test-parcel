!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequire94c2;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},n.parcelRequire94c2=o);var a=o.register;a("juqrk",function(n,t){e(n.exports,"_",function(){return r});function r(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")}}),a("bNI6E",function(n,t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}e(n.exports,"_",function(){return o})});var i=o("juqrk"),c=o("bNI6E"),u=function(){function e(){(0,i._)(this,e),this.searchQuery="",this.page=1}return(0,c._)(e,[{key:"fetchArticles",value:function(){var e=this;return fetch("https://newsapi.org/v2/everything?q=".concat(this.searchQuery,"&language=en&pageSize=10&page=").concat(this.page),{headers:{Authorization:"53234c7a30c3487e8bcad8ad4e056dba"}}).then(function(e){return e.json()}).then(function(n){return e.incrementPage(),n.articles})}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.query},set:function(e){this.searchQuery=e}}]),e}(),l={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},s=new u;l.searchForm.addEventListener("submit",function(e){e.preventDefault(),s.query=e.currentTarget.elements.query.value,s.resetPage(),s.fetchArticles().then(function(e){l.articlesContainer.insertAdjacentHTML("beforeend",e.map(function(e){var n=e.url,t=e.urlToImage,r=e.title,o=e.author,a=e.description;return'\n   <li>\n        <a href="'.concat(n,"\" target = '_blank' rel='noopener noreferrer' >\n          <article>\n            <img src=\"").concat(t,'" alt="" width=\'480\' />\n            <h2>').concat(r,"</h2>\n            <p>Posted by: ").concat(o,"</p>\n            <p>").concat(a,"</p>\n          </article>\n        </a>\n      </li>\n    ")}).join(""))})}),l.loadMoreBtn.addEventListener("click",function(){s.fetchArticles().then(function(e){return console.log(e)})})}();
//# sourceMappingURL=pagination.fe56bb70.js.map
