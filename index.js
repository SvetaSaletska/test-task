import{S as c}from"./assets/vendor-Bn3zXyiH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new c(".mySwiper",{slidesPerView:"auto",spaceBetween:4,loop:!0,breakpoints:{1200:{spaceBetween:32}}});new c(".mySwiper",{loop:!1,centeredSlides:!0,slidesPerView:3,spaceBetween:4,grabCursor:!0,on:{slideChange:function(){n()},init:function(){n()}}});function n(){document.querySelectorAll(".swiper-slide").forEach(r=>{const s=r.querySelector(".collection-image");r.classList.contains("swiper-slide-active")?(s.style.transform="scale(0.7)",s.style.opacity="0.5"):(s.style.transform="scale(1)",s.style.opacity="1")})}
//# sourceMappingURL=index.js.map
