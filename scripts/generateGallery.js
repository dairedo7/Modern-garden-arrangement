import galleryData from '../data/galleryData.json';
import { openModal, onEscClose, onBackgroundClick } from './helpers/onModalActions';

import { refs } from './refs';

const { masonryContainer, modal } = refs();

function generateGalleryItem(image) {
  const galleryItem = document.createElement('img');
  galleryItem.classList.add('w-full', 'sm_xl:w-[451px]', 'grid-item', 'inline-block', 'mb-11', 'cursor-pointer');

  galleryItem.src = image.preview;
  galleryItem.alt = image.description;

  galleryItem.loading = 'lazy';

  galleryItem.addEventListener('click', () => openModal(image.original));

  return galleryItem;
}

document.removeEventListener('keydown', onEscClose);
modal.addEventListener('click', onBackgroundClick);

galleryData.forEach((image) => {
  const galleryItem = generateGalleryItem(image);
  masonryContainer.insertAdjacentElement('beforeend', galleryItem);
});
