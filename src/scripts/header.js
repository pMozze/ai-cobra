const header = document.querySelector('.header');

if (header !== null) {
  const transitionTime = '250ms';
  const headerFullHeight = '94px';
  const headerMinimizedHeight = '64px';

  if (header.classList.contains('header_indent-body')) {
    document.body.style.setProperty('padding-top', headerFullHeight);
  }

  window.addEventListener('scroll', () => {
    window.scrollY > 0
      ? header.classList.add('header_minimized')
      : header.classList.remove('header_minimized');

    if (header.classList.contains('header_indent-body')) {
      window.scrollY > 0
        ? document.body.style.setProperty('padding-top', headerMinimizedHeight)
        : document.body.style.setProperty('padding-top', headerFullHeight);

      if (document.body.style.getPropertyValue('transition') === '') {
        document.body.style.setProperty('transition', `padding-top ${transitionTime}`);
      }
    }
  });
}
