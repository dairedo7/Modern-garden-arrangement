import galleryData from '../data/galleryData.json';
import { openModal, onEscClose, onBackgroundClick } from './helpers/onModalActions';

import { refs } from './refs';

const { galleryCollection, modal } = refs();

const galleryItems = Array.from(galleryCollection);

function generateImageOverlay(imageData) {
  galleryItems.map((image) => {
    image.alt = image.description;
    if (image.dataset.customNumber === imageData.number) {
      image.addEventListener('click', () => openModal(imageData.original));
    }

    return image;
  });
}

document.removeEventListener('keydown', onEscClose);
modal.addEventListener('click', onBackgroundClick);

galleryData.forEach((imageData) => generateImageOverlay(imageData));
