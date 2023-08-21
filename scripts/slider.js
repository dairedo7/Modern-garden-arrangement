import { showNextSlide, showPrevSlide } from './helpers/onSliderActions';

const prevButton = document.querySelector('[data-prev-slide]');
const nextButton = document.querySelector('[data-next-slide]');

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
