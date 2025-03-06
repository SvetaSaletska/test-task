import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.mySwiper', {
    slidesPerView: '2',
    spaceBetween: 4,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  