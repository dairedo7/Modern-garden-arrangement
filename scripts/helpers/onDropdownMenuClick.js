import { refs } from '../refs';

const { menuDropdown } = refs();

let isDropdownVisible = false;

function toggleDropdown() {
  isDropdownVisible = !isDropdownVisible;
  menuDropdown.classList.toggle('hidden', !isDropdownVisible);
  if (isDropdownVisible) {
    menuDropdown.querySelector('a').focus();
  }
}

function hideDropdown() {
  if (isDropdownVisible) {
    isDropdownVisible = false;
    menuDropdown.classList.add('hidden');
  }
}

export { toggleDropdown, hideDropdown };
