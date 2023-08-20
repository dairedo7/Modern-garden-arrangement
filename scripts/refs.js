export const refs = () => {
  return {
    menuOpenBtn: document.querySelector('[data-menu-open]'),
    menuCloseBtn: document.querySelector('[data-menu-close]'),
    mobileMenu: document.querySelector('[data-menu]'),
    slidesContainer: document.querySelector('[data-slider]'),
    masonryContainer: document.getElementById('masonry-container'),
    menuTrigger: document.querySelector('[data-menu-trigger]'),
    menuDropdown: document.querySelector('[data-menu-dropdown]'),
    searchButton: document.getElementById('searchButton'),
    searchInput: document.getElementById('searchInput'),
    expandButton: document.getElementById('expandButton'),
    expandContainer: document.getElementById('expandContainer'),
    modal: document.getElementById('modal'),
    modalImage: document.getElementById('modal-image'),
  };
};
