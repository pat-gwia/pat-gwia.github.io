document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    // Function to show the next slide
    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    // Set interval to change slides every 5 seconds
    setInterval(showNextSlide, 5000);
});
