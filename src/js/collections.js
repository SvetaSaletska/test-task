import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.mySwiper', {
    loop: false, // Зациклення слайдів
    centeredSlides: true, // Центруємо активний слайд
    slidesPerView: 3, // Завжди видно 3 слайди
    spaceBetween: 4, // Відстань між слайдами
    grabCursor: true, // Курсор, схожий на руку
    on: {
        slideChange: function () {
            updateSlideStyles(); // Оновлення стилів при зміні слайду
        },
        init: function () {
            updateSlideStyles(); // Оновлення стилів при ініціалізації
        }
    }
});

// Функція для оновлення стилів слайдів
function updateSlideStyles() {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
        const image = slide.querySelector('.collection-image');
        // Якщо слайд активний (по центру)
        if (slide.classList.contains('swiper-slide-active')) {
            image.style.transform = 'scale(0.7)'; // Центральний слайд збільшується
            image.style.opacity = '0.5'; // Центральний слайд чіткий
        } else {
            image.style.transform = 'scale(1)'; // Зменшуємо бокові слайди
            image.style.opacity = '1'; // Бокові зображення менш чіткі
        }
    });
}
