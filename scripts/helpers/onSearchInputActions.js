import { refs } from '../refs';

const { searchInput } = refs();

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

export { toggleSearchInput, hideSearchInput };
