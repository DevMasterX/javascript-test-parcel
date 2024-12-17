const e=document.querySelector(".js-search"),t=document.querySelector(".js-list");e.addEventListener("submit",function(e){var a,r;e.preventDefault();let{query:n,days:o}=e.currentTarget.elements;(a=n.value,r=o.value,fetch(`https://api.weatherapi.com/v1/forecast.json?key=1f583b8645b54c449e5214937241512&q=${a}&days=${r}&lang=uk`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()})).then(e=>t.innerHTML=e.forecast.forecastday.map(({date:e,day:{avgtemp_c:t,condition:{icon:a,text:r}}})=>`<li>
  <img src="${a}" alt="${r}">
  <p>${r}</p>
  <h2>${e}</h2>
  <h3>Avg temp: ${t} C</h3>
</li> `).join("")).catch(e=>console.log(e))});
//# sourceMappingURL=weather.a9d4b601.js.map
