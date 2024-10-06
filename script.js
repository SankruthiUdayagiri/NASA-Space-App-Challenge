// script.js

document.addEventListener('DOMContentLoaded', () => {
    /* Transparent Header on Scroll */
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(31, 40, 51, 0.8)'; /* Semi-transparent */
        } else {
            header.style.backgroundColor = '#1f2833'; /* Full color at top */
        }
    });

    /* Smooth Scroll JS */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /* Carousel Functionality */
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    // Removed playBtn since Play option is removed

    let currentIndex = 0;
    const totalSlides = slides.length;
    let slideInterval;
    const intervalTime = 7000; // 7 seconds

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides -1;
        } else {
            currentIndex = index;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlideFunc() {
        showSlide(currentIndex - 1);
    }

    function startCarousel() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function pauseCarousel() {
        clearInterval(slideInterval);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        pauseCarousel();
    });

    prevBtn.addEventListener('click', () => {
        prevSlideFunc();
        pauseCarousel();
    });

    pauseBtn.addEventListener('click', () => {
        pauseCarousel();
    });

    // Start the carousel
    startCarousel();
});
document.addEventListener('DOMContentLoaded', () => {
    /* Transparent Header on Scroll */
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(31, 40, 51, 0.8)'; /* Semi-transparent */
        } else {
            header.style.backgroundColor = '#1f2833'; /* Full color at top */
        }
    });

    /* Smooth Scroll JS */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /* Carousel Functionality */
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    let currentIndex = 0;
    const totalSlides = slides.length;
    let slideInterval;
    const intervalTime = 7000; // 7 seconds

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0; // Loop back to the first slide
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Loop to the last slide
        } else {
            currentIndex = index;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlideFunc() {
        showSlide(currentIndex - 1);
    }

    function startCarousel() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function pauseCarousel() {
        clearInterval(slideInterval);
    }

    // Pause the carousel when manually interacted with
    nextBtn.addEventListener('click', () => {
        nextSlide();
        pauseCarousel(); // Pause after manual interaction
    });

    prevBtn.addEventListener('click', () => {
        prevSlideFunc();
        pauseCarousel(); // Pause after manual interaction
    });

    pauseBtn.addEventListener('click', () => {
        pauseCarousel(); // Allow manual pausing
    });

    // Start the carousel on load
    startCarousel();
});
