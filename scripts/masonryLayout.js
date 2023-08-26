import Masonry from 'masonry-layout';
import { refs } from './refs';
import { setupIntersectionObserver } from './helpers/intersectionObserver';

const { masonryContainer } = refs();

const galleryObserver = setupIntersectionObserver(makeMasonryLayout, { threshold: 0.2 });

galleryObserver.observe(masonryContainer);

function makeMasonryLayout() {
  const masonry = new Masonry(masonryContainer, {
    itemSelector: '.grid-item',
    fitWidth: true,
    gutter: 43,
    stagger: 30,
    resize: true,
    horizontalOrder: true,
  });

  masonry.layout();
  return masonry;
}
