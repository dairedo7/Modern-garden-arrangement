import { refs } from './refs';
import { hideDropdown } from './helpers/onDropdownMenuClick';
import { hideSearchInput } from './helpers/onSearchInputActions';
import { toggleMenu } from './helpers/onMenuActions';

const { menuOpenBtn, menuCloseBtn, mobileMenuButtons } = refs();

menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);

mobileMenuButtons.forEach((button) =>
  button.addEventListener('click', () => {
    toggleMenu();
    hideDropdown();
    hideSearchInput();
  })
);

export { toggleMenu };
