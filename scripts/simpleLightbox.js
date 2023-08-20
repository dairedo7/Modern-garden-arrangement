import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

const generateGalleryItem = (image) => `
  <div>
    <a class="transition-transform hover:scale-[1.03] hover:shadow-subtleGray" href="${image.original}">
      <img class="w-full sm_xl:w-[451px] grid-item inline-block mb-6 sm_xl:mb-10 mxAuto"
        src="${image.preview}"
        alt="${image.description}"
      />
    </a>
  </div>
`;

<img class="w-full sm_xl:w-[451px] grid-item inline-block mb-6 sm_xl:mb-10 mxAuto" src="./images/projects-1.png" alt="Modern Garden Arrangement"></img>;

const galleryEls = galleryItems.map(generateGalleryItem).join('');

gallery.insertAdjacentHTML('beforeend', galleryEls);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

console.log(gallery);

console.log(galleryItems);
