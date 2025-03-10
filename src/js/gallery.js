import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.mySwiper', {
    slidesPerView: '3',
    spaceBetween: 10,
    loop: false,
    loopAdditionalSlides: 3
  });
  
