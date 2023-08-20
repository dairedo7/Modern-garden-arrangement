import { refs } from './refs';
import { showNextSlide } from './slider';

const { slidesContainer } = refs();

if (slidesContainer !== null) {
  let slidesInterval = setInterval(setTimer, 3000);

  function setTimer() {
    showNextSlide(1);
  }

  slidesContainer.addEventListener('mouseover', clearInterval(slidesInterval));
  slidesContainer.addEventListener('mouseout', () => {
    slidesInterval = setInterval(setTimer, 2000);
  });
}
