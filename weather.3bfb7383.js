const e=document.querySelector(".js-search"),t=document.querySelector(".js-list");e.addEventListener("submit",function(e){var a,n,r;e.preventDefault();let{query:o,days:c,language:s}=e.currentTarget.elements;(a=o.value,n=c.value,r=s.value,fetch(`https://api.weatherapi.com/v1/forecast.json?key=1f583b8645b54c449e5214937241512&q=${a}&days=${n}&lang=${r}`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()})).then(e=>t.innerHTML=e.forecast.forecastday.map(({date:e,day:{avgtemp_c:t,condition:{icon:a,text:n}}})=>`<li>
  <img src="${a}" alt="${n}">
  <p>${n}</p>
  <h2>${e}</h2>
  <h3>Avg temp: ${t} C</h3>
</li> `).join("")).catch(e=>console.log(e))});
//# sourceMappingURL=weather.3bfb7383.js.map
