(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),s=t(417),c=t.n(s),u=new URL(t(68),t.b),d=new URL(t(90),t.b),l=new URL(t(650),t.b),p=i()(o()),f=c()(u),m=c()(d),g=c()(l);p.push([e.id,`@font-face {\n  font-family: "Mekona";\n  src:\n    url(${f}) format("woff2"),\n    url(${m}) format("woff");\n  font-style: normal;\n  font-weight: 400;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 20px auto;\n  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\n    url(${g}); /* Photo by Lisa Fotios: https://www.pexels.com/photo/selective-focus-photography-of-pasta-with-tomato-and-basil-1279330/ */\n  background-size: 1920px 1280px;\n  background-repeat: no-repeat;\n  font-family: "Mekona", sans-serif;\n  color: antiquewhite;\n}\n\n#carousel-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n#carousel {\n  display: grid;\n  grid-template-columns: 150px 900px 150px;\n  grid-row: auto;\n  justify-content: center;\n  align-items: center;\n}\n\n.carousel-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.carousel-item img {\n  width: 700px;\n  height: 700px;\n}\n\n.carousel-item.previous img,\n.carousel-item.next img {\n  width: 150px;\n  height: 150px;\n}\n\n.carousel-item.current {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.recipe-name {\n  margin-bottom: 20px;\n  font-size: 40px;\n}\n\n.navigation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.navigation button {\n  font-family: "Mekona";\n  font-size: 30px;\n  font-weight: 400;\n  padding: 10px;\n  background-color: #bbb;\n  color: black;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  transition:\n    background-color 0.3s ease,\n    transform 0.2s ease;\n  margin: 0 20px;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.navigation button:hover {\n  background-color: #717171;\n  transform: scale(1.2);\n}\n\n.dots {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: minmax(15px, 1fr);\n  justify-content: center;\n  align-items: center;\n  column-gap: 20px;\n  margin: 0 20px;\n  width: 250px;\n}\n\n.dot {\n  width: 15px;\n  height: 15px;\n  background-color: none;\n  border: 1px solid #bbb;\n  border-radius: 50%;\n  cursor: pointer;\n  transition:\n    border 0.2s ease,\n    background-color 0.3s ease,\n    transform 0.2s ease;\n  place-self: center;\n}\n\n.dot:hover {\n  border: 1px solid #bbb;\n  background-color: none;\n  transform: scale(1.2);\n}\n\n.dot.selected {\n  border: none;\n  background-color: #717171;\n  transform: scale(0.9);\n}\n`,""]);const h=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},936:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(594);function o(){const e=new a;!function(e){const n=document.querySelector(".prev-btn"),t=document.querySelector(".next-btn");n.addEventListener("click",(()=>{e.previous(),e.resetTimeout()})),t.addEventListener("click",(()=>{e.next(),e.resetTimeout()}))}(e),function(e,n){const t=document.querySelector(".dots"),r=function(e,n){const t=document.createDocumentFragment(),r=Array.from({length:n},((e,n)=>{const r=function(e){const n=document.createElement("div");return n.classList.add("dot"),n.setAttribute("id",e),n}(n);return t.appendChild(r),r}));return e.appendChild(t),r[0].classList.add("selected"),r}(t,n);t.addEventListener("click",(n=>{const t=n.target;if(t.classList.contains("dot")){const n=r.indexOf(t);e.updateCarousel(n),e.resetTimeout()}}))}(e,(0,r.Qh)())}class a{constructor(){this.currIndex=0,this.totalPictures=(0,r.Qh)(),this.updateCarousel(this.currIndex),this.autoUpdate()}next(){this.currIndex=(this.currIndex+1)%this.totalPictures,this.updateCarousel(this.currIndex)}previous(){this.currIndex=(this.currIndex-1+this.totalPictures)%this.totalPictures,this.updateCarousel(this.currIndex)}updateCarousel(e){document.querySelector(".dots")?(function(e=0){const n=document.querySelector(".current"),t=document.querySelector(".previous"),o=document.querySelector(".next"),{previousIndex:a,currentIndex:i,nextIndex:s}=function(e,n){const t=(e+n)%n;return{previousIndex:(t+(n-1))%n,currentIndex:t,nextIndex:(t+1)%n}}(e,(0,r.Qh)());n.innerHTML="",t.innerHTML="",o.innerHTML="";const c=(0,r.Ay)(i),u=(0,r.Ay)(a),d=(0,r.Ay)(s),l=document.createElement("div");l.classList.add("recipe-name"),l.innerHTML=c.recipeName,n.appendChild(l),n.appendChild((0,r.mm)(c)),t.appendChild((0,r.mm)(u)),o.appendChild((0,r.mm)(d))}(e),this.updateDots(e)):setTimeout((()=>this.updateCarousel(e)),0)}updateDots(e){const n=document.querySelector(".dots .selected");n&&n.classList.remove("selected");const t=document.getElementById(e);t&&(t.classList.add("selected"),this.currIndex=e)}autoUpdate(){this.intervalId=setInterval((()=>this.next()),5e3)}resetTimeout(){clearInterval(this.intervalId),this.autoUpdate()}}},594:(e,n,t)=>{t.d(n,{mm:()=>d,Ay:()=>u,Qh:()=>l});const r=t.p+"9ac522d2351d63d9e33a.jpg",o=t.p+"0cf2eb94227000a2964c.jpg",a=t.p+"1761dbc087cc67b9557e.jpg",i=t.p+"a2905d9f4a96b562b5de.jpg",s=t.p+"0f6655e1490a6c764688.jpg",c=t.p+"2e3a8c6ffbacc57b93b5.jpg";function u(e){return f[e]}function d(e){const n=document.createElement("img");return n.src=e.pictureBundle,n.alt=e.recipeName,n}function l(){return f.length}class p{constructor(e){this.picturePath=e}get recipeName(){return this.generateRecipe()}get pictureBundle(){return this.getBundledPicture()}getBundledPicture(){switch(this.picturePath){case"./images/menu/spaghetti_carbonara.jpg":return r;case"./images/menu/penne_arrabbiata.jpg":return o;case"./images/menu/lasagna.jpg":return a;case"./images/menu/ravioli.jpg":return i;case"./images/menu/pesto_genovese.jpg":return s;case"./images/menu/fettuccine_alfredo.jpg":return c;default:return null}}generateRecipe(){let e=this.picturePath.split("/")[3].split(".")[0];if(e.includes("_")){const n=e.split("_");e=n.map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")}else e=e.charAt(0).toUpperCase()+e.slice(1);return e}}let f=function(e){if(!Array.isArray(e))throw new TypeError("Expected an array, got "+typeof e);for(let n=(e=[...e]).length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e}([new p("./images/menu/spaghetti_carbonara.jpg"),new p("./images/menu/penne_arrabbiata.jpg"),new p("./images/menu/lasagna.jpg"),new p("./images/menu/ravioli.jpg"),new p("./images/menu/pesto_genovese.jpg"),new p("./images/menu/fettuccine_alfredo.jpg")])},90:(e,n,t)=>{e.exports=t.p+"9d4b718d499f868e6388.woff"},68:(e,n,t)=>{e.exports=t.p+"75fc9f81e90d33aa8580.woff2"},650:(e,n,t)=>{e.exports=t.p+"f9d30ad93fbe29b6fa53.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),u=t(56),d=t.n(u),l=t(540),p=t.n(l),f=t(113),m=t.n(f),g=t(208),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(g.A,h),g.A&&g.A.locals&&g.A.locals,(0,t(936).A)()})();