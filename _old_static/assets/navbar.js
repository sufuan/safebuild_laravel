/**
 * SafeBuild Canada — Navbar (vanilla JS, no jQuery)
 * Handles: mobile menu toggle, desktop dropdowns, mobile sub-menu accordion,
 * search overlay open/close, sticky behavior is pure CSS.
 */
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('main-navbar');
    const topBar = navbar ? navbar.previousElementSibling : null;
    let stickyOffset = navbar ? navbar.offsetTop : 0;

    /* ── Sticky Navbar Logic ────────────────────────────── */
    function updateSticky() {
        if (!navbar) return;
        // Re-calculate offset each time if needed (e.g. on expansion)
        const currentOffset = topBar ? topBar.offsetHeight : 0;

        if (window.scrollY > currentOffset) {
            navbar.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'shadow-md');
            document.body.style.paddingTop = navbar.offsetHeight + 'px';
        } else {
            navbar.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'shadow-md');
            document.body.style.paddingTop = '0px';
        }
    }

    window.addEventListener('scroll', updateSticky);
    window.addEventListener('resize', updateSticky);
    updateSticky(); // Initial check

    /* ── Mobile hamburger toggle ───────────────────────────── */
    const burger = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerOpen = document.getElementById('burger-open');
    const burgerClose = document.getElementById('burger-close');

    if (burger && mobileMenu) {
        burger.addEventListener('click', function () {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            burgerOpen.classList.toggle('hidden', !isOpen);
            burgerClose.classList.toggle('hidden', isOpen);
        });
    }

    /* ── Desktop dropdowns (hover) ─────────────────────────── */
    document.querySelectorAll('.nav-dropdown-parent').forEach(function (parent) {
        const dropdown = parent.querySelector('.nav-dropdown');
        if (!dropdown) return;
        let timeout;
        parent.addEventListener('mouseenter', function () {
            clearTimeout(timeout);
            dropdown.classList.remove('invisible', 'opacity-0', 'translate-y-2');
            dropdown.classList.add('visible', 'opacity-100', 'translate-y-0');
        });
        parent.addEventListener('mouseleave', function () {
            timeout = setTimeout(function () {
                dropdown.classList.add('invisible', 'opacity-0', 'translate-y-2');
                dropdown.classList.remove('visible', 'opacity-100', 'translate-y-0');
            }, 150);
        });
    });

    /* ── Mobile sub-menu accordion (click) ─────────────────── */
    document.querySelectorAll('.mobile-submenu-toggle').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = btn.nextElementSibling;
            const chevron = btn.querySelector('.chevron-icon');
            if (submenu) {
                submenu.classList.toggle('hidden');
                if (chevron) chevron.classList.toggle('rotate-180');
            }
        });
    });

    /* ── Full-screen search overlay ────────────────────────── */
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');

    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function () {
            searchOverlay.classList.remove('hidden');
            searchOverlay.classList.add('flex');
            if (searchInput) searchInput.focus();
        });
    }
    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', function () {
            searchOverlay.classList.add('hidden');
            searchOverlay.classList.remove('flex');
        });
    }
    // Close on ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && searchOverlay && !searchOverlay.classList.contains('hidden')) {
            searchOverlay.classList.add('hidden');
            searchOverlay.classList.remove('flex');
        }
    });
});
