import { refs } from './refs';

const { masonryContainer, expandButton } = refs();

let isExpanded = false;

expandButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  isExpanded = !isExpanded;

  if (isExpanded) {
    masonryContainer.classList.add('expanded');

    expandButton.innerHTML = 'Schowaj &uarr;';
    expandButton.style.bottom = '0';
  } else {
    masonryContainer.classList.remove('expanded');
    expandButton.innerHTML = 'Rozwiń &darr;';
    expandButton.style.bottom = '6%';
  }
});
