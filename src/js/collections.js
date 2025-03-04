import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.mySwiper', {
    loop: true, // Зациклення
    centeredSlides: true, // Центруємо активний слайд
    slidesPerView: 'auto', // Кількість слайдів, що видно одночасно
    spaceBetween: 30, // Відстань між слайдами
    grabCursor: true, // Курсор схожий на руку
    on: {
        slideChange: function () {
            updateSlideStyles();
        },
        init: function () {
            updateSlideStyles();
        }
    }
});

function updateSlideStyles() {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
        const image = slide.querySelector('.collection-image');
        if (swiper.isBeginning || swiper.isEnd) {
            slide.style.transform = 'scale(1)';
        }
    });
}
