const slides = document.querySelectorAll('[slide]');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.add('hidden');
  });
  slides[index].classList.remove('hidden');
  currentIndex = index;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

export { showNextSlide, showPrevSlide };
