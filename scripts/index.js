import '../index.css';
import { toggleMenu } from './toggleMenu';
import { refs } from './refs';

const { menuOpenBtn, menuCloseBtn } = refs();

menuOpenBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});
