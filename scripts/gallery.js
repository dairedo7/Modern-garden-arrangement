import { refs } from './refs';

import imagesData from '../data/galleryData.json';

const { masonryContainer, expandButton, expandContainer } = refs();

const galleryImages = masonryContainer.querySelectorAll('img');

let isExpanded = false;

expandButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  isExpanded = !isExpanded;

  if (isExpanded) {
    masonryContainer.classList.add('expanded');
    expandButton.innerHTML = 'Schowaj &uarr;';
    expandButton.style.bottom = '0';

    galleryImages.forEach((image) => image.addEventListener('click', handleImageClick));
  } else {
    masonryContainer.classList.remove('expanded');
    expandButton.innerHTML = 'Rozwiń &darr;';
    expandButton.style.bottom = '6%';

    galleryImages.forEach((image) => image.removeEventListener('click', handleImageClick));
  }
});

const handleImageClick = (evt) => {
  const clickedImage = evt.target;
  console.log(clickedImage.alt);
};
