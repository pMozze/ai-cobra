const languageDropdown = document.querySelector('.language-dropdown');
if (languageDropdown !== null) {
  languageDropdown.addEventListener('click', () => {
    languageDropdown.classList.toggle('language-dropdown_shown');
  });

  languageDropdown.querySelector('.menu').addEventListener('click', event => {
    event.stopPropagation();
  });

  languageDropdown.querySelectorAll('.menu-item').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      languageDropdown.querySelector('.language-dropdown__content').innerHTML =
        menuItem.querySelector('.menu-item__content').innerHTML;

      languageDropdown.querySelectorAll('.menu-item').forEach(menuItem2 => {
        if (menuItem2 === menuItem) {
          menuItem2.classList.toggle('menu-item_active', true);
        } else {
          menuItem2.classList.toggle('menu-item_active', false);
        }
      });

      languageDropdown.classList.toggle('language-dropdown_shown', false);
    });
  });
}
