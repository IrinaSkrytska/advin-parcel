$(document).ready((function(){var e=function(e){var t=y.item(e);console.log(t);var o=String(t.getAttribute("data-id"));console.log(o),t.addEventListener("click",(function(e){return E(e,t,o)}))},t=document.querySelector(".chair"),o=document.querySelector(".washingMachine"),n=document.querySelector(".sofa_red"),a=document.querySelector(".sofa_grey"),c=document.querySelector(".sofa_beige"),i=document.querySelector(".sofa_blue"),l=document.querySelector(".bath"),r=document.querySelector(".door"),d=document.querySelector(".kitchen_machine"),s=document.getElementById("ar-link");t.addEventListener("click",(function(e){s.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test chair"),window.location.href="https://adv-marketplace.advin-global.com/chair.html")}),!1)})),o.addEventListener("click",(function(e){s.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test washing machine"),window.location.href="https://adv-marketplace.advin-global.com/washingMachine.html")}),!1)})),n.addEventListener("click",(function(e){s.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test sofa red"),window.location.href="https://adv-marketplace.advin-global.com/sofa_red.html")}),!1)})),a.addEventListener("click",(function(e){s.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test sofa grey"),window.location.href="https://adv-marketplace.advin-global.com/sofa_grey.html")}),!1)})),c.addEventListener("click",(function(e){s.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test sofa beige"),window.location.href="https://adv-marketplace.advin-global.com/sofa_beige.html")}),!1)})),i.addEventListener("click",(function(e){s.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test sofa blue"),window.location.href="https://adv-marketplace.advin-global.com/sofa_blue.html")}),!1)})),l.addEventListener("click",(function(e){s.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test bath"),window.location.href="https://adv-marketplace.advin-global.com/bath.html")}),!1)})),r.addEventListener("click",(function(e){s.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test door"),window.location.href="https://adv-marketplace.advin-global.com/door.html")}),!1)})),d.addEventListener("click",(function(e){s.addEventListener("message",(function(e){"_apple_ar_quicklook_button_tapped"===e.data&&(console.log("test kitchen machine"),window.location.href="https://adv-marketplace.advin-global.com/kitchenMachine.html")}),!1)}));var m=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",initialSlide:2,dynamicBullets:!0,loop:!0,navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"},renderBullet:function(e,t){return'<span class="'+t+'" id="'+t+"-"+(e+1)+'"></span>'}}});$(".swiper-button-prev-custom").on("click",(function(){m.slidePrev(),console.log("Test")})),$(".swiper-button-next-custom").on("click",(function(){m.slideNext()})),m.slideTo(2,0,!1),m.slideTo(2,0,!1),$(".products .card .fake-qr-button").mouseover((function(){$(this).closest(".card").addClass("hover"),$(this).closest(".swiper").addClass("hover")})).mouseout((function(){$(this).closest(".card").removeClass("hover"),$(this).closest(".swiper").removeClass("hover")})),$(".products").on("click",".card",(function(){var e=$(this).attr("id");console.log("you click on:",e)}));for(var p,g=/android/i.test(navigator.userAgent),u=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,h=/Safari\//.test(navigator.userAgent),v=/firefox/i.test(navigator.userAgent),f=/OculusBrowser/.test(navigator.userAgent),k=u&&/CriOS\//.test(navigator.userAgent),_=u&&h,b=g&&!v&&!f,w=((p=document.createElement("a")).relList&&p.relList.supports&&p.relList.supports("ar"),function(e,t,o){var n=document.createElement("a");t&&(t=!0,n.appendChild(document.createElement("img")),n.rel="ar"),n.setAttribute("href",e),n.click(),Notiflix.Loading.hourglass("AR may need a few seconds to load...",{clickToClose:!0}),Notiflix.Loading.remove(3e3),n.addEventListener("message",(function(e){o.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}))}),E=function(e,t,o){k||_||u?(t.setAttribute("ar","quick-look"),t.dispatchEvent(new CustomEvent("initialized",{detail:"quick-look"})),fetch("https://adv-marketplace-back.onrender.com/examples/models/".concat(o)).then((function(e){return e.json()})).then((function(e){var o=e.data.model.ios;if(console.log(o),o){var n="".concat(o,"#custom=https://adv-marketplace.advin-global.com/witnes.html&allowsContentScaling=0");console.log(n);var a=document.getElementById("ar-link");a.href="".concat(o,"#custom=https://adv-marketplace.advin-global.com/witnes.html&allowsContentScaling=0"),a.click()}else console.error("Invalid ios-src in <ar-button>: "+t)}))):b&&fetch("https://adv-marketplace-back.onrender.com/examples/models/".concat(o),{cache:"no-store"}).then((function(e){return e.json()})).then((function(e){var n=e.data.model.android;if(console.log(n),n){var a=null;"6400c871099c4fd9483c9a86"===o&&(a="intent://arvr.google.com/scene-viewer/1.1?file=".concat(n,"&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_red.html&title=Go to the order page"),a+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",w(a+="end;")),"6400ca4f0de00735df02fc85"===o&&(a="intent://arvr.google.com/scene-viewer/1.1?file=".concat(n,"&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_blue.html&title=Go to the order page"),a+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",w(a+="end;")),"6400d08c0de00735df02fc87"===o&&(a="intent://arvr.google.com/scene-viewer/1.1?file=".concat(n,"&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_beige.html&title=Go to the order page"),a+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",w(a+="end;")),"6400d0560de00735df02fc86"===o&&(a="intent://arvr.google.com/scene-viewer/1.1?file=".concat(n,"&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_grey.html&title=Go to the order page"),a+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",w(a+="end;")),"6400c871099c4fd9483c9a84"===o&&(a="intent://arvr.google.com/scene-viewer/1.1?file=".concat(n,"&mode=ar_only&link=https://adv-marketplace.advin-global.com/chair.html&title=Go to the order page"),a+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",w(a+="end;")),"6400c871099c4fd9483c9a85"===o&&(a="intent://arvr.google.com/scene-viewer/1.1?file=".concat(n,"&mode=ar_only&link=https://adv-marketplace.advin-global.com/washingMachine.html&title=Go to the order page"),a+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",w(a+="end;")),"6400c871099c4fd9483c9a87"===o&&(a="intent://arvr.google.com/scene-viewer/1.1?file=".concat(n,"&mode=ar_only&link=https://adv-marketplace.advin-global.com/bath.html&title=Go to the order page"),a+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",w(a+="end;")),"6400c871099c4fd9483c9a89"===o&&(a="intent://arvr.google.com/scene-viewer/1.1?file=".concat(n,"&mode=ar_only&link=https://adv-marketplace.advin-global.com/kitchenMachine.html&title=Go to the order page"),a+="#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;",w(a+="end;"))}else console.error("Invalid src in <ar-button>: "+t)}))},y=document.querySelectorAll("ar-button"),L=0;L<y.length;L++)e(L)}));
//# sourceMappingURL=index.5ffb8faa.js.map
