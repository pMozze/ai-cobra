const header = document.querySelector('.header .container');
const hamburgerMenu = document.getElementById('hamburger-menu');
const hamburgerMenuHeader = document.querySelector('.hm-header');

document.querySelector('.header .header-menu').addEventListener('click', () => {
  const paddingTop = window.getComputedStyle(header).paddingTop;
  hamburgerMenuHeader.style.setProperty('padding-top', paddingTop);
  hamburgerMenuHeader.style.setProperty('padding-bottom', paddingTop);

  document.getElementById('hamburger-menu').style.setProperty('display', 'block');
  document.body.style.setProperty('overflow-y', 'hidden');
});

document.querySelector('.hm-header .hm-header-menu').addEventListener('click', () => {
  document.getElementById('hamburger-menu').style.removeProperty('display');
  document.body.style.removeProperty('overflow-y');
});

header.addEventListener('transitionend', () => {
  const paddingTop = window.getComputedStyle(header).paddingTop;
  hamburgerMenuHeader.style.setProperty('padding-top', paddingTop);
  hamburgerMenuHeader.style.setProperty('padding-bottom', paddingTop);
});

const itemBrand = hamburgerMenu.querySelector('.navigation__item.navigation__item_brand');
const itemProducts = hamburgerMenu.querySelector('.navigation__item.navigation__item_products');
const itemShop = hamburgerMenu.querySelector('.navigation__item.navigation__item_shop');
const itemDelivery = hamburgerMenu.querySelector('.navigation__item.navigation__item_delivery');

const showItemContent = (item, className) => {
  const contentElement = hamburgerMenu.querySelector(className);

  contentElement.style.removeProperty('display');
  contentElement.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    easing: 'ease',
    duration: 250
  });

  hamburgerMenu.querySelectorAll('.navigation__item').forEach(navigationItem => {
    if (navigationItem !== item) {
      navigationItem.style.setProperty('opacity', .2);
      navigationItem.style.setProperty('transition', 'opacity 250ms');
    }
  });
};

const hideItemContent = (item, className) => {
  const contentElement = hamburgerMenu.querySelector(className);

  const animation = contentElement.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], {
    easing: 'ease',
    duration: 250
  });

  animation.addEventListener('finish', () => {
    contentElement.style.setProperty('display', 'none');
  }, { once: true });

  hamburgerMenu.querySelectorAll('.navigation__item').forEach(navigationItem => {
    navigationItem.style.setProperty('opacity', 1);

    // navigationItem.addEventListener('transitionend', () => {

    // }, { once: true });
  });
};

itemBrand.addEventListener('mouseenter', () => showItemContent(itemBrand, '.brand-logotype'));
itemBrand.addEventListener('mouseleave', () => hideItemContent(itemBrand, '.brand-logotype'));

itemProducts.addEventListener('mouseenter', () => showItemContent(itemProducts, '.products-image'));
itemProducts.addEventListener('mouseleave', () => hideItemContent(itemProducts, '.products-image'));

itemShop.addEventListener('mouseenter', () => showItemContent(itemShop, '.shop-image'));
itemShop.addEventListener('mouseleave', () => hideItemContent(itemShop, '.shop-image'));

itemDelivery.addEventListener('mouseenter', () => showItemContent(itemDelivery, '.delivery-logotypes'));
itemDelivery.addEventListener('mouseleave', () => hideItemContent(itemDelivery, '.delivery-logotypes'));
