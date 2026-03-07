/**
 * Hero Slider Logic - Vanilla JS
 * Handles fade transitions and content animations for the Hero section.
 */

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');

    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 6000;

    function showSlide(index) {
        // Reset current animations
        document.querySelectorAll('.slide-content').forEach(content => {
            content.classList.add('translate-y-10', 'opacity-0');
        });

        // Toggle slides
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('opacity-0', 'z-0');
                slide.classList.add('opacity-100', 'z-10');

                // Trigger animation after a short delay
                setTimeout(() => {
                    const content = slide.querySelector('.slide-content');
                    if (content) {
                        content.classList.remove('translate-y-10', 'opacity-0');
                    }
                }, 200);
            } else {
                slide.classList.remove('opacity-100', 'z-10');
                slide.classList.add('opacity-0', 'z-0');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoPlay() {
        stopAutoPlay();
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
        if (slideInterval) clearInterval(slideInterval);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoPlay(); // Reset timer
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoPlay(); // Reset timer
        });
    }

    // Initial Start
    if (slides.length > 0) {
        showSlide(0);
        startAutoPlay();
    }
});
