const slides = document.querySelectorAll('[slide]');
const prevButton = document.querySelector('[data-prev-slide]');
const nextButton = document.querySelector('[data-next-slide]');
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

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    showPrevSlide();
  } else if (event.key === 'ArrowRight') {
    showNextSlide();
  }
});

export { showNextSlide, showPrevSlide };
