/**
 * Testimonials Slider - Vanilla JS
 * Handles fade transitions between testimonial slides.
 */

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;
    const intervalTime = 5000;
    let slideInterval;

    function showSlide(n) {
        slides.forEach(s => s.classList.add('hidden', 'opacity-0'));
        dots.forEach(d => d.classList.remove('bg-sb-red'));
        dots.forEach(d => d.classList.add('bg-gray-300'));

        slides[n].classList.remove('hidden');
        setTimeout(() => slides[n].classList.remove('opacity-0'), 10);

        dots[n].classList.add('bg-sb-red');
        dots[n].classList.remove('bg-gray-300');
        currentSlide = n;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function startInterval() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    // Initial Start
    if (slides.length > 0) {
        showSlide(0);
        startInterval();
    }
});
