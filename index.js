import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

$(document).ready(function () {
  const buttonChair = document.querySelector('.chair');
  const buttonWashingMachine = document.querySelector('.washingMachine');
  const buttonSofaRed = document.querySelector('.sofa_red');
  const buttonSofaGrey = document.querySelector('.sofa_grey');
  const buttonSofaBeige = document.querySelector('.sofa_beige');
  const buttonSofaBlue = document.querySelector('.sofa_blue');
  const buttonBath = document.querySelector('.bath');
  const buttonDoor = document.querySelector('.door');
  const buttonKitchenMachine = document.querySelector('.kitchen_machine');

  //--------------------//
  const linkElement = document.getElementById('ar-link');
  buttonChair.addEventListener('click', event => {
    linkElement.addEventListener(
      'message',
      function (event) {
        if (event.data === '_apple_ar_quicklook_button_tapped') {
          console.log('test chair');
          window.location.href =
            'https://adv-marketplace.advin-global.com/chair.html';
        }
      },
      false
    );
  });

  buttonWashingMachine.addEventListener('click', event => {
    linkElement.addEventListener(
      'message',
      function (event) {
        if (event.data === '_apple_ar_quicklook_button_tapped') {
          console.log('test washing machine');
          window.location.href =
            'https://adv-marketplace.advin-global.com/washingMachine.html';
        }
      },
      false
    );
  });

  buttonSofaRed.addEventListener('click', event => {
    linkElement.addEventListener(
      'message',
      function (event) {
        if (event.data === '_apple_ar_quicklook_button_tapped') {
          console.log('test sofa red');
          window.location.href =
            'https://adv-marketplace.advin-global.com/sofa_red.html';
        }
      },
      false
    );
  });

  buttonSofaGrey.addEventListener('click', event => {
    linkElement.addEventListener(
      'message',
      function (event) {
        if (event.data === '_apple_ar_quicklook_button_tapped') {
          console.log('test sofa grey');
          window.location.href =
            'https://adv-marketplace.advin-global.com/sofa_grey.html';
        }
      },
      false
    );
  });

  buttonSofaBeige.addEventListener('click', event => {
    linkElement.addEventListener(
      'message',
      function (event) {
        if (event.data === '_apple_ar_quicklook_button_tapped') {
          console.log('test sofa beige');
          window.location.href =
            'https://adv-marketplace.advin-global.com/sofa_beige.html';
        }
      },
      false
    );
  });

  buttonSofaBlue.addEventListener('click', event => {
    linkElement.addEventListener(
      'message',
      function (event) {
        if (event.data === '_apple_ar_quicklook_button_tapped') {
          console.log('test sofa blue');
          window.location.href =
            'https://adv-marketplace.advin-global.com/sofa_blue.html';
        }
      },
      false
    );
  });

  buttonBath.addEventListener('click', event => {
    linkElement.addEventListener(
      'message',
      function (event) {
        if (event.data === '_apple_ar_quicklook_button_tapped') {
          console.log('test bath');
          window.location.href =
            'https://adv-marketplace.advin-global.com/bath.html';
        }
      },
      false
    );
  });

  buttonDoor.addEventListener('click', event => {
    linkElement.addEventListener(
      'message',
      function (event) {
        if (event.data === '_apple_ar_quicklook_button_tapped') {
          console.log('test door');
          window.location.href =
            'https://adv-marketplace.advin-global.com/door.html';
        }
      },
      false
    );
  });

  buttonKitchenMachine.addEventListener('click', event => {
    linkElement.addEventListener(
      'message',
      function (event) {
        if (event.data === '_apple_ar_quicklook_button_tapped') {
          console.log('test kitchen machine');
          window.location.href =
            'https://adv-marketplace.advin-global.com/kitchenMachine.html';
        }
      },
      false
    );
  });
  var itemidndex = 2;

  var swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      initialSlide: itemidndex,
      dynamicBullets: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '" id="' +
          className +
          '-' +
          (index + 1) +
          '"></span>'
        );
      },
    },
  });

  $('.swiper-button-prev-custom').on('click', function () {
    swiper.slidePrev();
    console.log('Test');
  });
  $('.swiper-button-next-custom').on('click', function () {
    swiper.slideNext();
  });

  swiper.slideTo(itemidndex, 0, false);
  swiper.slideTo(itemidndex, 0, false);

  // qr-hover
  $('.products .card .fake-qr-button')
    .mouseover(function () {
      $(this).closest('.card').addClass('hover');
      $(this).closest('.swiper').addClass('hover');
    })
    .mouseout(function () {
      $(this).closest('.card').removeClass('hover');
      $(this).closest('.swiper').removeClass('hover');
    });

  // product click

  $('.products').on('click', '.card', function () {
    let $element = $(this);
    let id = $element.attr('id');

    console.log('you click on:', id);
  });

  // --- AR --- this is the best game forever =)))

  const IS_ANDROID = /android/i.test(navigator.userAgent);
  const IS_IOS =
    (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  const IS_SAFARI = /Safari\//.test(navigator.userAgent);
  const IS_FIREFOX = /firefox/i.test(navigator.userAgent);
  const IS_OCULUS = /OculusBrowser/.test(navigator.userAgent);
  const IS_IOS_CHROME = IS_IOS && /CriOS\//.test(navigator.userAgent);
  const IS_IOS_SAFARI = IS_IOS && IS_SAFARI;

  const SUPPORTS_SCENEVIEWER = IS_ANDROID && !IS_FIREFOX && !IS_OCULUS;
  const SUPPORTS_QUICKLOOK = (() => {
    const anchor = document.createElement('a');
    return (
      anchor.relList && anchor.relList.supports && anchor.relList.supports('ar')
    );
  })();
  //   const i = navigator.maxTouchPoints === 1;

  const activateAR = (href, isQuickLook, button) => {
    const anchor = document.createElement('a');
    if (isQuickLook) {
      isQuickLook = true;

      anchor.appendChild(document.createElement('img'));
      anchor.rel = 'ar';
    }
    anchor.setAttribute('href', href);
    anchor.click();
    console.log('I`m here and notiflix should be working');

    Notiflix.Loading.hourglass(
      'Будь ласка, почекайте до 30 секунд. 3D-кур’єр вже прямує до вас!',
      {
        clickToClose: true,
        svgColor: 'rgb(255, 87, 34)',
        messageMaxLength: 200,
        messageFontSize: '18px',
        fontFamily: 'Furore',
      }
    );

    Notiflix.Loading.remove(2000);

    anchor.addEventListener('message', event => {
      button.dispatchEvent(new CustomEvent('quick-look-button-tapped'));
    });
  };

  const handleClickAR = (event, button, id) => {
    // if (i) {
    //   return;
    // }

    if (IS_IOS_CHROME || IS_IOS_SAFARI || IS_IOS) {
      button.setAttribute('ar', 'quick-look');
      button.dispatchEvent(
        new CustomEvent('initialized', { detail: 'quick-look' })
      );

      fetch(`https://adv-marketplace-back.onrender.com/examples/models/${id}`)
        .then(response => response.json())
        .then(({ data }) => {
          const iosSrc = data.model.ios;

          console.log(iosSrc);
          if (!iosSrc) {
            console.error('Invalid ios-src in <ar-button>: ' + button);
            return;
          }
          let href = `${iosSrc}#custom=https://adv-marketplace.advin-global.com/witnes.html&allowsContentScaling=0`;
          console.log(href);

          Notiflix.Loading.hourglass('AR may need a few seconds to load...', {
            clickToClose: true,
          });

          Notiflix.Loading.remove(3000);

          const Element = document.getElementById('ar-link');
          Element.href = `${iosSrc}#custom=https://adv-marketplace.advin-global.com/witnes.html&allowsContentScaling=0`;
          Element.click();
        });
    } else if (SUPPORTS_SCENEVIEWER) {
      // system supports AR via scene viewer
      fetch(`https://adv-marketplace-back.onrender.com/examples/models/${id}`, {
        cache: 'no-store',
      })
        .then(response => response.json())
        .then(({ data }) => {
          const androidSrc = data.model.android;

          console.log(androidSrc);

          if (!androidSrc) {
            console.error('Invalid src in <ar-button>: ' + button);
            return;
          }
          let href = null;

          if (id === '6400c871099c4fd9483c9a86') {
            href = `intent://arvr.google.com/scene-viewer/1.1?file=${androidSrc}&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_red.html&title=Go to the order page`;

            href +=
              `#Intent;scheme=https;` +
              `package=com.google.ar.core;` +
              `action=android.intent.action.VIEW;`;
            href += `end;`;

            activateAR(href);
          }

          if (id === '6400ca4f0de00735df02fc85') {
            href = `intent://arvr.google.com/scene-viewer/1.1?file=${androidSrc}&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_blue.html&title=Go to the order page`;

            href +=
              `#Intent;scheme=https;` +
              `package=com.google.ar.core;` +
              `action=android.intent.action.VIEW;`;
            href += `end;`;

            activateAR(href);
          }

          if (id === '6400d08c0de00735df02fc87') {
            href = `intent://arvr.google.com/scene-viewer/1.1?file=${androidSrc}&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_beige.html&title=Go to the order page`;

            href +=
              `#Intent;scheme=https;` +
              `package=com.google.ar.core;` +
              `action=android.intent.action.VIEW;`;
            href += `end;`;

            activateAR(href);
          }

          if (id === '6400d0560de00735df02fc86') {
            href = `intent://arvr.google.com/scene-viewer/1.1?file=${androidSrc}&mode=ar_only&link=https://adv-marketplace.advin-global.com/sofa_grey.html&title=Go to the order page`;

            href +=
              `#Intent;scheme=https;` +
              `package=com.google.ar.core;` +
              `action=android.intent.action.VIEW;`;
            href += `end;`;

            activateAR(href);
          }

          if (id === '6400c871099c4fd9483c9a84') {
            href = `intent://arvr.google.com/scene-viewer/1.1?file=${androidSrc}&mode=ar_only&link=https://adv-marketplace.advin-global.com/chair.html&title=Go to the order page`;

            href +=
              `#Intent;scheme=https;` +
              `package=com.google.ar.core;` +
              `action=android.intent.action.VIEW;`;
            href += `end;`;

            activateAR(href);
          }

          if (id === '6400c871099c4fd9483c9a85') {
            href = `intent://arvr.google.com/scene-viewer/1.1?file=${androidSrc}&mode=ar_only&link=https://adv-marketplace.advin-global.com/washingMachine.html&title=Go to the order page`;

            href +=
              `#Intent;scheme=https;` +
              `package=com.google.ar.core;` +
              `action=android.intent.action.VIEW;`;
            href += `end;`;

            activateAR(href);
          }

          if (id === '6400c871099c4fd9483c9a87') {
            href = `intent://arvr.google.com/scene-viewer/1.1?file=${androidSrc}&mode=ar_only&link=https://adv-marketplace.advin-global.com/bath.html&title=Go to the order page`;

            href +=
              `#Intent;scheme=https;` +
              `package=com.google.ar.core;` +
              `action=android.intent.action.VIEW;`;
            href += `end;`;

            activateAR(href);
          }

          if (id === '6400c871099c4fd9483c9a89') {
            href = `intent://arvr.google.com/scene-viewer/1.1?file=${androidSrc}&mode=ar_only&link=https://adv-marketplace.advin-global.com/kitchenMachine.html&title=Go to the order page`;

            href +=
              `#Intent;scheme=https;` +
              `package=com.google.ar.core;` +
              `action=android.intent.action.VIEW;`;
            href += `end;`;

            activateAR(href);
          }
        });
    }
    // else if (IS_IOS) {
    //   // No AR supported on current system, hide the button or sets a fallback url
    //   button.setAttribute("ar", "unsupported_ios");
    //   button.dispatchEvent(
    //     new CustomEvent("initialized", { detail: "unsupported_ios" })
    //   );
    //   if (button.getAttribute("show-if-unsupported") != null) {
    //     button.addEventListener("click", () => {
    //       const fallbackUrl = button.getAttribute("fallback-url");
    //       if (fallbackUrl) {
    //         activateAR(encodeURIComponent(fallbackUrl));
    //       }
    //     });
    // }
    //   else {
    //     button.style.display = "none";
    //   }
    // } else {
    //   // No AR supported on current system, hide the button or sets a fallback url
    //   button.setAttribute("ar", "unsupported");
    //   button.dispatchEvent(
    //     new CustomEvent("initialized", { detail: "unsupported" })
    //   );
    //   if (button.getAttribute("show-if-unsupported") != null) {
    //     button.addEventListener("click", () => {
    //       const fallbackUrl = button.getAttribute("fallback-url");
    //       if (fallbackUrl) {
    //         activateAR(encodeURIComponent(fallbackUrl));
    //       }
    //     });
    //   } else {
    //     button.style.display = "none";
    //   }
    // }
  };

  const buttons = document.querySelectorAll('ar-button');
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons.item(i);
    console.log(button);
    const id = String(button.getAttribute('data-id'));
    console.log(id);
    button.addEventListener('click', event => handleClickAR(event, button, id));
  }
});
