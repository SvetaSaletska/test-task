import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 3000, // затримка між слайдами (в мілісекундах)
    //   disableOnInteraction: false, // слайдер продовжуватиме автоматичний перегляд навіть після взаємодії
  
    // modules: [Navigation, Pagination],
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  });
  
//   document.addEventListener('keydown', event => {
//     if (event.key === 'ArrowLeft') {
//       swiper.slidePrev();
//     } else if (event.key === 'ArrowRight') {
//       swiper.slideNext();
//     }
//   });