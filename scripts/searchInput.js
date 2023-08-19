import { refs } from './refs';

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

function toggleSearchInput() {
  searchInput.classList.toggle('hidden');
  if (!searchInput.classList.contains('hidden')) {
    searchInput.focus();
  }
}

function hideSearchInput() {
  if (!searchInput.classList.contains('hidden')) {
    searchInput.classList.add('hidden');
  }
}
