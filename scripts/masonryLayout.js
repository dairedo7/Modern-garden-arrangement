import Masonry from 'masonry-layout';

import { refs } from './refs';

const { masonryContainer } = refs();

window.addEventListener('load', () => {
  const masonry = new Masonry(masonryContainer, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    gutter: 40,
    horizontalOrder: true,
    percentPosition: true,
  });

  masonry.layout();
});
