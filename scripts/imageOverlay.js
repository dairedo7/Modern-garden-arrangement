import galleryData from '../data/galleryData.json';

import { refs } from './refs';

const { masonryContainer, modal, modalImage } = refs();

function generateGalleryItem(image) {
  const galleryItem = document.createElement('img');
  galleryItem.classList.add('w-full', 'sm_xl:w-[451px]', 'grid-item', 'inline-block', 'mb-11', 'cursor-pointer');

  galleryItem.src = image.preview;
  galleryItem.alt = image.description;

  galleryItem.loading = 'lazy';

  galleryItem.addEventListener('click', () => openModal(image.original));

  return galleryItem;
}

function openModal(imageUrl) {
  document.addEventListener('keydown', onEscClose);

  modalImage.src = imageUrl;
  modal.style.display = 'block';
}

const onModalClose = () => {
  document.removeEventListener('keydown', onEscClose);
  modal.style.display = 'none';
};

const onEscClose = (e) => {
  if (e.key === 'Escape') {
    onModalClose();
  }
};

const onBackgroundClick = (evt) => {
  if (evt.target === evt.currentTarget) onModalClose();
};

document.removeEventListener('keydown', onEscClose);
modal.addEventListener('click', onBackgroundClick);

galleryData.forEach((image) => {
  const galleryItem = generateGalleryItem(image);
  masonryContainer.insertAdjacentElement('beforeend', galleryItem);
});
