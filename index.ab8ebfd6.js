function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);var c=n("aaQnt");e(c)(document).ready((function(){const t=document.querySelector(".chair"),o=document.querySelector(".washingMachine"),a=document.querySelector(".sofa_red"),n=document.querySelector(".sofa_grey"),i=document.querySelector(".sofa_beige"),l=document.querySelector(".sofa_blue"),r=document.querySelector(".bath"),d=document.querySelector(".door"),s=document.querySelector(".kitchen_machine"),m=document.getElementById("ar-link");t.addEventListener("click",(e=>{m.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test chair"),window.location.href="https://adv-marketplace.advin-global.com/chair.html")}),!1)})),o.addEventListener("click",(e=>{m.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test washing machine"),window.location.href="https://adv-marketplace.advin-global.com/washingMachine.html")}),!1)})),a.addEventListener("click",(e=>{m.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test sofa red"),window.location.href="https://adv-marketplace.advin-global.com/sofa_red.html")}),!1)})),n.addEventListener("click",(e=>{m.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test sofa grey"),window.location.href="https://adv-marketplace.advin-global.com/sofa_grey.html")}),!1)})),i.addEventListener("click",(e=>{m.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test sofa beige"),window.location.href="https://adv-marketplace.advin-global.com/sofa_beige.html")}),!1)})),l.addEventListener("click",(e=>{m.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test sofa blue"),window.location.href="https://adv-marketplace.advin-global.com/sofa_blue.html")}),!1)})),r.addEventListener("click",(e=>{m.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test bath"),window.location.href="https://adv-marketplace.advin-global.com/bath.html")}),!1)})),d.addEventListener("click",(e=>{m.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test door"),window.location.href="https://adv-marketplace.advin-global.com/door.html")}),!1)})),s.addEventListener("click",(e=>{m.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test kitchen machine"),window.location.href="https://adv-marketplace.advin-global.com/kitchenMachine.html")}),!1)}));var p=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",initialSlide:2,dynamicBullets:!0,loop:!0,navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"},renderBullet:function(e,t){return'<span class="'+t+'" id="'+t+"-"+(e+1)+'"></span>'}}});e(c)(".swiper-button-prev-custom").on("click",(function(){p.slidePrev(),console.log("Test")})),e(c)(".swiper-button-next-custom").on("click",(function(){p.slideNext()})),p.slideTo(2,0,!1),p.slideTo(2,0,!1),e(c)(".products .card .fake-qr-button").mouseover((function(){e(c)(this).closest(".card").addClass("hover"),e(c)(this).closest(".swiper").addClass("hover")})).mouseout((function(){e(c)(this).closest(".card").removeClass("hover"),e(c)(this).closest(".swiper").removeClass("hover")})),e(c)(".products").on("click",".card",(function(){let t=e(c)(this).attr("id");console.log("you click on:",t)}));const g=/android/i.test(navigator.userAgent),u=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,h=/Safari\//.test(navigator.userAgent),v=/firefox/i.test(navigator.userAgent),f=/OculusBrowser/.test(navigator.userAgent),k=u&&/CriOS\//.test(navigator.userAgent),_=u&&h,b=g&&!v&&!f,w=((()=>{const e=document.createElement("a");e.relList&&e.relList.supports&&e.relList.supports("ar")})(),(e,t,o)=>{const a=document.createElement("a");t&&(t=!0,a.appendChild(document.createElement("img")),a.rel="ar"),a.setAttribute("href",e),a.click(),Notiflix.Loading.hourglass("AR may need a few seconds to load...",{clickToClose:!0}),Notiflix.Loading.remove(3e3),a.addEventListener("message",(e=>{o.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}))}),E=(e,t,o)=>{k||_||u?(t.setAttribute("ar","quick-look"),t.dispatchEvent(new CustomEvent("initialized",{detail:"quick-look"})),fetch(`https://adv-marketplace-back.onrender.com/examples/models/${o}`).then((e=>e.json())).then((({data:e})=>{const o=e.model.ios;if(console.log(o),!o)return void console.error("Invalid ios-src in <ar-button>: "+t);let a=`${o}#custom=https://adv-marketplace.advin-global.com/witnes.html&allowsContentScaling=0`;console.log(a);const n=document.getElementById("ar-link");n.href=`${o}#custom=https://adv-marketplace.advin-global.com/witnes.html&allowsContentScaling=0`,n.click()}))):b&&fetch(`https://adv-marketplace-back.onrender.com/examples/models/${o}`,{cache:"no-store"}).then((e=>e.json())).then((({data:e})=>{const a=e.model.android;if(console.log(a),!a)return void console.error("Invalid src in <ar-button>: "+t);let n=null;"6400c871099c4fd9483c9a86"===o&&(n=`intent://arvr.google.com/scene-viewer/1.1?file=${a}&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_red.html&title=Go to the order page`,n+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",n+="end;",w(n)),"6400ca4f0de00735df02fc85"===o&&(n=`intent://arvr.google.com/scene-viewer/1.1?file=${a}&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_blue.html&title=Go to the order page`,n+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",n+="end;",w(n)),"6400d08c0de00735df02fc87"===o&&(n=`intent://arvr.google.com/scene-viewer/1.1?file=${a}&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_beige.html&title=Go to the order page`,n+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",n+="end;",w(n)),"6400d0560de00735df02fc86"===o&&(n=`intent://arvr.google.com/scene-viewer/1.1?file=${a}&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_grey.html&title=Go to the order page`,n+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",n+="end;",w(n)),"6400c871099c4fd9483c9a84"===o&&(n=`intent://arvr.google.com/scene-viewer/1.1?file=${a}&mode=ar_only&link=https://adv-marketplace.advin-global.com/chair.html&title=Go to the order page`,n+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",n+="end;",w(n)),"6400c871099c4fd9483c9a85"===o&&(n=`intent://arvr.google.com/scene-viewer/1.1?file=${a}&mode=ar_only&link=https://adv-marketplace.advin-global.com/washingMachine.html&title=Go to the order page`,n+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",n+="end;",w(n)),"6400c871099c4fd9483c9a87"===o&&(n=`intent://arvr.google.com/scene-viewer/1.1?file=${a}&mode=ar_only&link=https://adv-marketplace.advin-global.com/bath.html&title=Go to the order page`,n+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",n+="end;",w(n)),"6400c871099c4fd9483c9a89"===o&&(n=`intent://arvr.google.com/scene-viewer/1.1?file=${a}&mode=ar_only&link=https://adv-marketplace.advin-global.com/kitchenMachine.html&title=Go to the order page`,n+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",n+="end;",w(n))}))},y=document.querySelectorAll("ar-button");for(let e=0;e<y.length;e++){const t=y.item(e);console.log(t);const o=String(t.getAttribute("data-id"));console.log(o),t.addEventListener("click",(e=>E(0,t,o)))}}));
//# sourceMappingURL=index.ab8ebfd6.js.map
