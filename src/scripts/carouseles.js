import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

new Swiper('.hero.hero_home .hero-carousel', {
  wrapperClass: 'hero-carousel__wrapper',
  slideClass: 'hero-carousel-slide',
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.hero-carousel-pagination',
    bulletClass: 'hero-carousel-pagination__item',
    bulletActiveClass: 'hero-carousel-pagination__item_active',
    renderBullet: (index, className) => {
      return `<div class="${className}"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10_1154)"><g filter="url(#filter0_b_10_1154)"><circle cx="10" cy="10" r="9" stroke="white" stroke-opacity="0.3" stroke-width="2"></circle></g><g filter="url(#filter1_b_10_1154)"><path d="M10 1C11.78 1 13.5201 1.52784 15.0001 2.51677C16.4802 3.50571 17.6337 4.91131 18.3149 6.55585C18.9961 8.20038 19.1743 10.01 18.8271 11.7558C18.4798 13.5016 17.6226 15.1053 16.364 16.364C15.1053 17.6226 13.5016 18.4798 11.7558 18.8271C10.01 19.1743 8.20038 18.9961 6.55585 18.3149C4.91131 17.6337 3.50571 16.4802 2.51677 15.0001C1.52784 13.5201 1 11.78 1 10" stroke="white" stroke-width="2"></path></g></g><defs><filter id="filter0_b_10_1154" x="-5" y="-5" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_10_1154"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_10_1154" result="shape"></feBlend></filter><filter id="filter1_b_10_1154" x="-4" y="-4" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_10_1154"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_10_1154" result="shape"></feBlend></filter><clipPath id="clip0_10_1154"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg> <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_10_1158)"><circle cx="10" cy="10" r="3" fill="white"></circle></g><defs><filter id="filter0_b_10_1158" x="3" y="3" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_10_1158"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_10_1158" result="shape"></feBlend></filter></defs></svg></div>`;
    }
  }
});

new Swiper('.hero.hero_product .hero-carousel', {
  wrapperClass: 'hero-carousel__wrapper',
  slideClass: 'hero-carousel-slide',
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  navigation: {
    prevEl: '.hero-carousel-navigation__arrow.hero-carousel-navigation__arrow_left',
    nextEl: '.hero-carousel-navigation__arrow.hero-carousel-navigation__arrow_right'
  },
  pagination: {
    el: '.hero-carousel-pagination',
    bulletClass: 'hero-carousel-pagination__item',
    bulletActiveClass: 'hero-carousel-pagination__item_active',
    renderBullet: (index, className) => {
      return `<div class="${className}"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_10_1154)"><g filter="url(#filter0_b_10_1154)"><circle cx="10" cy="10" r="9" stroke="white" stroke-opacity="0.3" stroke-width="2"></circle></g><g filter="url(#filter1_b_10_1154)"><path d="M10 1C11.78 1 13.5201 1.52784 15.0001 2.51677C16.4802 3.50571 17.6337 4.91131 18.3149 6.55585C18.9961 8.20038 19.1743 10.01 18.8271 11.7558C18.4798 13.5016 17.6226 15.1053 16.364 16.364C15.1053 17.6226 13.5016 18.4798 11.7558 18.8271C10.01 19.1743 8.20038 18.9961 6.55585 18.3149C4.91131 17.6337 3.50571 16.4802 2.51677 15.0001C1.52784 13.5201 1 11.78 1 10" stroke="white" stroke-width="2"></path></g></g><defs><filter id="filter0_b_10_1154" x="-5" y="-5" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_10_1154"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_10_1154" result="shape"></feBlend></filter><filter id="filter1_b_10_1154" x="-4" y="-4" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_10_1154"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_10_1154" result="shape"></feBlend></filter><clipPath id="clip0_10_1154"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg> <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_10_1158)"><circle cx="10" cy="10" r="3" fill="white"></circle></g><defs><filter id="filter0_b_10_1158" x="3" y="3" width="14" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_10_1158"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_10_1158" result="shape"></feBlend></filter></defs></svg></div>`;
    }
  }
});

new Swiper('.brand-carousel', {
  wrapperClass: 'brand-carousel__wrapper',
  slideClass: 'brand-carousel__slide',
  slidesPerView: 1.5,
  spaceBetween: 50,
  navigation: {
    prevEl: '.brand-carousel-navigation__arrow.brand-carousel-navigation__arrow_left',
    nextEl: '.brand-carousel-navigation__arrow.brand-carousel-navigation__arrow_right'
  }
});
