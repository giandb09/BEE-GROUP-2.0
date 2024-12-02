document.addEventListener('DOMContentLoaded', () => {
    // Animaciones de aparición
    const sections = document.querySelectorAll('.fade-in-section');

    function checkVisibility() {
        const triggerHeight = window.innerHeight * 0.8;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top < triggerHeight && rect.bottom > 0) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    // Carrusel
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * 100 + '%';
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset})`;
    }

    document.querySelector('.carousel-button.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-button.prev').addEventListener('click', prevSlide);
});
