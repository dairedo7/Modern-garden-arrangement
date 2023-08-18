import Masonry from 'masonry-layout';

import { refs } from './refs';

const { masonryLayout } = refs();

window.addEventListener('load', () => {
  const masonry = new Masonry(masonryLayout, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    gutter: 40,
    horizontalOrder: true,
    percentPosition: true,
  });

  masonry.layout();
});
