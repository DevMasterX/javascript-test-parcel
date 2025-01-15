const t=document.querySelector(".js-search"),e=document.querySelector(".js-add"),n=document.querySelector(".js-list"),r=document.querySelector(".js-form-container"),a='<input type="text" name="country"/>';async function c(t){let e=t.map(async t=>{let e=await fetch(`https://restcountries.com/v3.1/name/${t}`);if(!e.ok)throw Error();return e.json()});return(await Promise.allSettled(e)).filter(({status:t})=>"fulfilled"===t).map(({value:t})=>t[0])}async function o(t){let e=t.map(async t=>{let e=new URLSearchParams({key:"1f583b8645b54c449e5214937241512",q:t,lang:"uk"}),n=await fetch(`https://api.weatherapi.com/v1/current.json?${e}`);if(!n.ok)throw Error(n.statusText);return n.json()}),n=(await Promise.allSettled(e)).filter(({status:t})=>"fulfilled"===t).map(({value:t})=>t);return console.log(n),n}e.addEventListener("click",function(){r.insertAdjacentHTML("beforeend",a)}),t.addEventListener("submit",function(e){e.preventDefault(),c(new FormData(e.currentTarget).getAll("country").filter(t=>t).map(t=>t.trim())).then(async t=>{let e=t.map(({capital:t})=>t[0]),r=await o(e);n.innerHTML=r.map(({current:{temp_c:t,condition:{text:e,icon:n}},location:{country:r,name:a}})=>`  <li>
        <div>
          <h2>${r}</h2>
          <h3>${a}</h3>
          <img src="${n}" alt="${e}" />
          <p>${e}</p>
          <p>${t}</p>
        </div>
      </li>`).join("")}).catch(t=>console.log(t)).finally(()=>{r.innerHTML=a,t.reset()})});
//# sourceMappingURL=async-await.9e6684bb.js.map
