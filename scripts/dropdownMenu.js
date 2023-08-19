import { refs } from './refs';

const { menuTrigger, menuDropdown } = refs();

let isDropdownVisible = false;

menuTrigger.addEventListener('click', () => {
  toggleDropdown();
});

document.addEventListener('click', (event) => {
  if (!menuTrigger.contains(event.target) && !menuDropdown.contains(event.target)) {
    hideDropdown();
  }
});

menuTrigger.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleDropdown();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideDropdown();
  }
});

function toggleDropdown() {
  isDropdownVisible = !isDropdownVisible;
  menuDropdown.classList.toggle('hidden', !isDropdownVisible);
  if (isDropdownVisible) {
    menuDropdown.querySelector('a').focus(); // Focus on the first item
  }
}

function hideDropdown() {
  if (isDropdownVisible) {
    isDropdownVisible = false;
    menuDropdown.classList.add('hidden');
  }
}
