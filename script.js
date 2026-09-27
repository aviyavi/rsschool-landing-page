document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. КОД ДЛЯ ПЕРЕКЛЮЧЕНИЯ ТЕМЫ
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            const icons = themeToggleBtn.querySelectorAll('.toggle-icon');
            icons.forEach(icon => icon.classList.toggle('active'));
        });
    }

    // ==========================================
    // 2. КОД ДЛЯ БУРГЕР-МЕНЮ
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const closeToggle = document.getElementById('closeToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = document.querySelectorAll('.menu-links a');

    const openMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('is-open');
            document.body.style.overflow = '';
        }
    };

    if (menuToggle && closeToggle && mobileMenu) {
        menuToggle.addEventListener('click', openMenu);
        closeToggle.addEventListener('click', closeMenu);

        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // ==========================================
    // 3. КОД ДЛЯ СЛАЙДЕРА КОФЕ
    // ==========================================
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const lines = document.querySelectorAll('.control-line');

    let currentSlideIndex = 0;

    const updateSlider = (index) => {
        if (!slides[currentSlideIndex] || !slides[index]) return;

        // Удаляем активный класс у старого слайда и линии
        slides[currentSlideIndex].classList.remove('active');
        if (lines[currentSlideIndex]) lines[currentSlideIndex].classList.remove('active');

        // Обновляем индекс
        currentSlideIndex = index;

        // Добавляем активный класс новому слайду и линии
        slides[currentSlideIndex].classList.add('active');
        if (lines[currentSlideIndex]) lines[currentSlideIndex].classList.add('active');
    };

    if (prevBtn && nextBtn && slides.length > 0) {
        // Клик на стрелку «Вперед»
        nextBtn.addEventListener('click', () => {
            let newIndex = currentSlideIndex + 1;
            if (newIndex >= slides.length) {
                newIndex = 0;
            }
            updateSlider(newIndex);
        });

        // Клик на стрелку «Назад»
        prevBtn.addEventListener('click', () => {
            let newIndex = currentSlideIndex - 1;
            if (newIndex < 0) {
                newIndex = slides.length - 1;
            }
            updateSlider(newIndex);
        });

        // Клик на нижние полоски-индикаторы
        lines.forEach((line, index) => {
            line.addEventListener('click', () => {
                updateSlider(index);
            });
        });
    }
    
});
