import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.mySwiper', {
    loop: true, // Додаємо зациклення
    centeredSlides: true, // Центруємо поточний слайд
    slidesPerView: 'auto', // Кількість слайдів, що видно на екрані
    spaceBetween: 15, // Відстань між слайдами
    effect: 'slide', // Вибір ефекту для слайдера
    grabCursor: true, // Курсор схожий на руку
  });
  