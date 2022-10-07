const languageDropdown = document.querySelector('.language-dropdown');

document.querySelectorAll('.language-dropdown').forEach(languageDropdown => {
  const menu = languageDropdown.querySelector('.menu');
  const menuItems = menu.querySelectorAll('.menu-item');

  const showMenu = toggle => {
    if (toggle === true) {
      languageDropdown.classList.toggle('language-dropdown_shown', true);
    } else {
      languageDropdown.classList.toggle('language-dropdown_shown');
    }
  };

  const hideMenu = () => {
    languageDropdown.classList.toggle('language-dropdown_shown', false);
  };

  const onItemSelected = (itemIndex, itemId) => {
    // ...
  };

  menuItems.forEach((menuItem, menuItemIndex) => {
    menuItem.addEventListener('click', () => {
      languageDropdown.querySelector('.language-dropdown__content').innerHTML =
        menuItem.querySelector('.menu-item__content').innerHTML;

      menuItems.forEach(menuItem2 => {
        menuItem2 === menuItem
          ? menuItem2.classList.toggle('menu-item_active', true)
          : menuItem2.classList.toggle('menu-item_active', false);
      });

      onItemSelected(menuItemIndex, menuItem.getAttribute('data-id'));
      hideMenu();
    });
  });

  languageDropdown.addEventListener('click', showMenu);
  languageDropdown.addEventListener('mouseenter', () => showMenu(true));

  menu.addEventListener('click', event => {
    event.stopPropagation();
  });

  document.addEventListener('click', event => {
    if (!event.composedPath().includes(languageDropdown)) {
      hideMenu();
    }
  });

  document.addEventListener('scroll', () => {
    if (languageDropdown.classList.contains('language-dropdown_shown')) {
      hideMenu();
    }
  }, { capture: true });
});
