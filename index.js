import{a as f,S as y,i}from"./assets/vendor-B3UvNUPd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d="58365620-30e856fc3094618fcab4c124c",m="https://pixabay.com/api/";function g(o){return f.get(m,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const p=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){return o.map(({webformatURL:t,largeImageURL:a,tags:s,likes:e,views:r,comments:n,downloads:u})=>`
        <li class="gallery-item">
          <a href="${a}" class="gallery-link">
            <img
              src="${t}"
              alt="${s}"
              class="gallery-image"
            />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${e}</p>
            <p><b>Views:</b> ${r}</p>
            <p><b>Comments:</b> ${n}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>
      `).join("")}function L(){p.innerHTML=""}function S(){h.refresh()}function q(){l.style.display="block"}function w(){l.style.display="none"}const c=document.querySelector(".form"),P=document.querySelector(".gallery");c.addEventListener("submit",$);function $(o){o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(!t){i.warning({message:"Please enter a search query!"});return}L(),q(),g(t).then(a=>{if(a.data.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}P.innerHTML=b(a.data.hits),S()}).catch(()=>{i.error({message:"Something went wrong. Please try again!"})}).finally(()=>{w()}),c.reset()}
//# sourceMappingURL=index.js.map
