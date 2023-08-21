import { onImageLoad } from './onImageLoad';
import { refs } from '../refs';

const { modalImageEl } = refs();

function openModal(imageUrl) {
  document.addEventListener('keydown', onEscClose);
  modal.style.display = 'block';
  onImageLoad(imageUrl, modalImageEl);
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

export { openModal, onModalClose, onEscClose, onBackgroundClick };
