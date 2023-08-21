export const refs = () => {
  return {
    menuOpenBtn: document.querySelector('[data-menu-open]'),
    menuCloseBtn: document.querySelector('[data-menu-close]'),
    mobileMenu: document.querySelector('[data-menu]'),
    masonryContainer: document.getElementById('masonry-container'),
    menuTrigger: document.querySelector('[data-menu-trigger]'),
    menuDropdown: document.querySelector('[data-menu-dropdown]'),
    searchButton: document.getElementById('searchButton'),
    searchInput: document.getElementById('searchInput'),
    expandButton: document.getElementById('expandButton'),
    expandContainer: document.getElementById('expandContainer'),
    modal: document.getElementById('modal'),
    modalImageEl: document.getElementById('modal-image'),
    aboutUsSection: document.getElementById('about-us'),
    heroSlider: document.querySelector('[data-hero-slider]'),
    heroText: document.querySelector('[data-hero-text]'),
    offerSection: document.querySelector('[data-offer]'),
    ourApproachExample: document.querySelector('[data-our-approach-example]'),
    ourApproachButton: document.querySelector('[data-our-approach-button]'),
    ourApproachText: document.querySelector('[data-our-approach-text]'),
    contactUs: document.querySelector('[data-contact-us]'),
    footer: document.querySelectorAll('.data-footer-text'),
    mobileMenuButtons: document.querySelectorAll('.mobile-menu-button'),
  };
};
