const startImageAnimation = (wrapperSelector, elementSelector) => {
  const wrapperElements = document.querySelectorAll(wrapperSelector);

  if (!wrapperElements.length) {
    return;
  }

  wrapperElements.forEach(wrapperElement => {
    const elements = wrapperElement.querySelectorAll(elementSelector);
    const imageElement = wrapperElement.querySelector('.animation-image');

    if (imageElement === null) {
      return;
    }

    elements.forEach(element => {
      const imageUrl = element.getAttribute('data-image');

      if (imageUrl === null) {
        return;
      }

      element.addEventListener('mouseenter', () => {
        imageElement.style.setProperty('display', 'block');
        imageElement.style.setProperty('background-image', `url("${imageUrl}")`);

        element.style.setProperty('position', 'relative');
        element.style.setProperty('z-index', '1');

        const imageWidth = window.getComputedStyle(imageElement);
        imageElement.animate([
          {
            width: '0px',
            opacity: '0',
            transform: 'translate(-50%, -50%) rotateZ(45deg)'
          },
          {
            width: imageWidth,
            opacity: '1',
            transform: 'translate(-50%, -50%) rotateZ(0deg)'
          }
        ], {
          easing: 'ease',
          duration: 500
        });
      });

      element.addEventListener('mouseleave', () => {
        imageElement.style.removeProperty('display');
        element.style.removeProperty('position');
        element.style.removeProperty('z-index');
      });
    });
  });
};

startImageAnimation('.products-links', '.products-links-item');
startImageAnimation('.products', '.products-item');
