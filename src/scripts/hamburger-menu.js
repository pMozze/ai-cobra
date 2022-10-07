const header = document.querySelector('.header .container');
const hamburgerMenuHeader = document.querySelector('.hm-header');

document.querySelector('.header .header-menu').addEventListener('click', () => {
  const paddingBlock = window.getComputedStyle(header).paddingBlock;
  hamburgerMenuHeader.style.setProperty('padding-block', paddingBlock);

  document.getElementById('hamburger-menu').style.setProperty('display', 'block');
  document.body.style.setProperty('overflow-y', 'hidden');
});

document.querySelector('.hm-header .hm-header-menu').addEventListener('click', () => {
  document.getElementById('hamburger-menu').style.removeProperty('display');
  document.body.style.removeProperty('overflow-y');
});

header.addEventListener('transitionend', () => {
  const paddingBlock = window.getComputedStyle(header).paddingBlock;
  hamburgerMenuHeader.style.setProperty('padding-block', paddingBlock);
});
