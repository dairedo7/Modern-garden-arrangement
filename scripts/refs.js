export const refs = () => {
  return {
    menuOpenBtn: document.querySelector('[data-menu-open]'),
    menuCloseBtn: document.querySelector('[data-menu-close]'),
    mobileMenu: document.querySelector('[data-menu]'),
    slidesContainer: document.querySelector('[data-slider]'),
    masonryLayout: document.getElementById('masonry-container'),
    menuTrigger: document.querySelector('[data-menu-trigger]'),
    menuDropdown: document.querySelector('[data-menu-dropdown]'),
    searchButton: document.getElementById('searchButton'),
    searchInput: document.getElementById('searchInput'),
  };
};
