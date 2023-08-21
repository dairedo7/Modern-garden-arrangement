import { refs } from './refs';
import { toggleSearchInput, hideSearchInput } from './helpers/onSearchInputActions';

const { searchButton, searchInput } = refs();

searchButton.addEventListener('click', () => {
  toggleSearchInput();
});

document.addEventListener('click', (event) => {
  if (!searchButton.contains(event.target) && !searchInput.contains(event.target)) {
    hideSearchInput();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideSearchInput();
  }
});
