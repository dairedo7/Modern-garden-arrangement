import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const { modalWindow } = refs();

const gallery = document.querySelector('.gallery');
const galleryEls = galleryItems
  .map(
    (item) =>
      `<div>
     <a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
        />
     </a>
</div>
`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryEls);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

console.log(gallery);

console.log(galleryItems);
