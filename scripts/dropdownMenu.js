import { refs } from './refs';
import { toggleDropdown, hideDropdown } from './helpers/onDropdownMenuClick';

const { menuTrigger, menuDropdown } = refs();

menuTrigger.addEventListener('mouseenter', () => {
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
