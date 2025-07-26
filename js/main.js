document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', function() {
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    const showMoreBtn = document.querySelector('.show-more-btn');
    const additionalRates = document.querySelector('.additional-rates');
    
    if (showMoreBtn && additionalRates) {
        showMoreBtn.addEventListener('click', function() {
            if (additionalRates.style.display === 'none' || additionalRates.style.display === '') {
                additionalRates.style.display = 'block';
                showMoreBtn.textContent = 'ნაკლები ვალუტა';
            } else {
                additionalRates.style.display = 'none';
                showMoreBtn.textContent = 'მეტი ვალუტა';
            }
        });
    }

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const branchCards = document.querySelectorAll('.branch-card');
    branchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Swipe მხოლოდ მობილურისთვის
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        let startX = 0;
        let endX = 0;

        document.addEventListener('touchstart', function(e) {
            startX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const swipeDistance = startX - endX;

            if (Math.abs(swipeDistance) > swipeThreshold) {
                const pages = [
                    'index.html',
                    'technika.html',
                    'icloud.html',
                    'gold.html',
                    'currency.html',
                    'contact.html',
                    'vakansiebi.html'
                ];

                let currentPage = window.location.pathname.split('/').pop();
                if (currentPage === '') currentPage = 'index.html';

                const currentIndex = pages.indexOf(currentPage);
                if (currentIndex === -1) return;

                if (swipeDistance > 0 && currentIndex < pages.length - 1) {
                    window.location.href = pages[currentIndex + 1];
                } else if (swipeDistance < 0 && currentIndex > 0) {
                    window.location.href = pages[currentIndex - 1];
                }
            }
        }
    }
});
