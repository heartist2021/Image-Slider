let currentIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    for (let i = 1; i < totalSlides; i++) {
        slides.children[i].style.display = 'none';
    }
});

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    slides.children[currentIndex].style.display = 'none';

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slides.children[currentIndex].style.display = 'block';
}
