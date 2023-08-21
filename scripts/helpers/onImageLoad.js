import { refs } from '../refs';

const { modal } = refs();

export const onImageLoad = (imageUrl, imageEl) => {
  const loader = createLoader();

  modal.appendChild(loader);

  const image = new Image();
  image.src = imageUrl;
  image.alt = 'Gallery Image - Original Size';

  image.onload = () => {
    modal.removeChild(loader);
    imageEl.src = image.src;
    imageEl.alt = image.alt;
  };

  return imageEl;
};

function createLoader() {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  loader.style.position = 'absolute';
  loader.style.top = '40%';
  loader.style.left = '45%';
  return loader;
}
