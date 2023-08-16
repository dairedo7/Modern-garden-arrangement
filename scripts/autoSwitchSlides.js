import { refs } from './refs';
import { showNextSlide } from './slider';

const { slidesContainer } = refs();

if (slidesContainer !== null) {
  let slidesInterval = setInterval(setTimer, 3000);

  function setTimer() {
    showNextSlide(1);
  }

  slidesContainer.addEventListener('mouseover', stopAutoSlider);
  slidesContainer.addEventListener('mouseout', startAutoSlider);

  function stopAutoSlider() {
    clearInterval(slidesInterval);
  }

  function startAutoSlider() {
    slidesInterval = setInterval(setTimer, 2000);
  }
}
