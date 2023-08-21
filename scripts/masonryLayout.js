import Masonry from 'masonry-layout';
import { refs } from './refs';

const { masonryContainer } = refs();

window.addEventListener('load', () => {
  const masonry = new Masonry(masonryContainer, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    fitWidth: true,
    gutter: 43,
    stagger: 30,
    resize: true,
    horizontalOrder: true,
  });

  masonry.layout();
});
