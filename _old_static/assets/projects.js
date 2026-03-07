/**
 * Projects Slider - Vanilla JS
 * Handles horizontal scrolling for the project gallery.
 */

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('project-slider');
    const prevBtn = document.getElementById('project-prev');
    const nextBtn = document.getElementById('project-next');

    if (!slider || !prevBtn || !nextBtn) return;

    const scrollAmount = 400; // Adjust based on card width

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Optional: Hide/Show buttons based on scroll position
    const handleButtons = () => {
        prevBtn.style.opacity = slider.scrollLeft <= 0 ? '0.3' : '1';
        prevBtn.style.pointerEvents = slider.scrollLeft <= 0 ? 'none' : 'auto';

        const maxScroll = slider.scrollWidth - slider.clientWidth;
        nextBtn.style.opacity = slider.scrollLeft >= maxScroll ? '0.3' : '1';
        nextBtn.style.pointerEvents = slider.scrollLeft >= maxScroll ? 'none' : 'auto';
    };

    slider.addEventListener('scroll', handleButtons);
    window.addEventListener('resize', handleButtons);
    handleButtons();
});
