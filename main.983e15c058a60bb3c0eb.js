!function(){"use strict";var e,n={8292:function(e,n,t){t(5638);var r=document.querySelector(".menu"),o=document.querySelectorAll(".excellence-card"),c=Array.prototype.slice.call(o),u=document.querySelectorAll(".services-card"),i=Array.prototype.slice.call(u);r.addEventListener("click",(function(){r.classList.toggle("menu-active"),r.classList.contains("menu-active")?(document.querySelector(".header__menu").innerHTML="Закрыть",document.querySelector(".active-content").style.display="block"):(document.querySelector(".header__menu").innerHTML="Меню",document.querySelector(".active-content").style.display="none")})),c.map((function(e,n){e.addEventListener("mouseover",(function(){e.classList.add("excellence-card-active")})),e.addEventListener("mouseout",(function(){e.classList.remove("excellence-card-active")}))})),i.map((function(e,n){e.addEventListener("mouseover",(function(){e.childNodes[1].style.display="block",e.style.backgroundSize="120% 120%"})),e.addEventListener("mouseout",(function(){e.childNodes[1].style.display="none",e.style.backgroundSize="100% 100%"}))}))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var c=t[e]={exports:{}};return n[e].call(c.exports,c,c.exports,r),c.exports}r.m=n,e=[],r.O=function(n,t,o,c){if(!t){var u=1/0;for(a=0;a<e.length;a++){t=e[a][0],o=e[a][1],c=e[a][2];for(var i=!0,l=0;l<t.length;l++)(!1&c||u>=c)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(i=!1,c<u&&(u=c));i&&(e.splice(a--,1),n=o())}return n}c=c||0;for(var a=e.length;a>0&&e[a-1][2]>c;a--)e[a]=e[a-1];e[a]=[t,o,c]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={179:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,c,u=t[0],i=t[1],l=t[2],a=0;for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var s=l(r);for(n&&n(t);a<u.length;a++)c=u[a],r.o(e,c)&&e[c]&&e[c][0](),e[u[a]]=0;return r.O(s)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),r.O(void 0,[453],(function(){return r(1202)}));var o=r.O(void 0,[453],(function(){return r(8292)}));o=r.O(o)}();