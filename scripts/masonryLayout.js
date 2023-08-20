import Masonry from 'masonry-layout';
import { setupIntersectionObserver } from './helpers/animations';

import { refs } from './refs';

const { masonryContainer } = refs();

const targetEl = document.getElementById('about-us');
const observer = setupIntersectionObserver((target) => {
  target.classList.add('animate-translate');
  // Element is visible in the viewport
  // Take action, such as triggering animations or loading content
  // Unobserve the element after the action
});

observer.observe(targetEl);

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
