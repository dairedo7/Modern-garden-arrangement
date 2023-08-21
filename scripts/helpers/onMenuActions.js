import { refs } from '../refs';

const { mobileMenu } = refs();

const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden');
};

export { toggleMenu };
