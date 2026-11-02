import{a as y,S as m,i}from"./assets/vendor-B3UvNUPd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="58365620-30e856fc3094618fcab4c124c",p="https://pixabay.com/api/";function g(o){return y.get(p,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:a,downloads:f})=>`
        <li class="gallery-item">
          <a href="${n}" class="gallery-link">
            <img
              src="${t}"
              alt="${s}"
              class="gallery-image"
            />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e}</p>
            <p><b>Views:</b> ${r}</p>
            <p><b>Comments:</b> ${a}</p>
            <p><b>Downloads:</b> ${f}</p>
          </div>
        </li>
      `).join("")}function L(o){c.innerHTML=b(o),h.refresh()}function S(){c.innerHTML=""}function q(){l.style.display="block"}function w(){l.style.display="none"}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(o){o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(!t){i.warning({message:"Please enter a search query!"});return}S(),q(),g(t).then(n=>{if(n.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(n.hits)}).catch(n=>{console.error("Search error:",n),i.error({message:"Something went wrong. Please try again!"})}).finally(()=>{w()}),u.reset()}
//# sourceMappingURL=index.js.map
