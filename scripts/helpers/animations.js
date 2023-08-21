import { refs } from '../refs';

const { masonryContainer, aboutUsSection, heroSlider, heroText, offerSection, ourApproachText, ourApproachButton, ourApproachExample, contactUs, footer } =
  refs();

import { setupIntersectionObserver } from './intersectionObserver';

const animateHorizontalAppearance = (target) => {
  target.classList.add('animate-horizontal-movement');
};

const animateVerticalAppearance = (target) => {
  target.classList.add('animate-vertical-movement');
};

const animateVisibility = (target) => {
  target.classList.add('animate-visibility');
};

const aboutUsObserver = setupIntersectionObserver(animateHorizontalAppearance);
aboutUsObserver.observe(aboutUsSection);

const galleryObserver = setupIntersectionObserver(animateHorizontalAppearance, { threshold: 0.05 });

const heroTextOsberver = setupIntersectionObserver(animateHorizontalAppearance);
const heroSliderOsberver = setupIntersectionObserver(animateHorizontalAppearance);

const offerObserver = setupIntersectionObserver(animateHorizontalAppearance, { threshold: 0.9 });

const ourApproachExampleObserver = setupIntersectionObserver(animateHorizontalAppearance, { threshold: 0.2 });
const ourApproachTextObserver = setupIntersectionObserver(animateHorizontalAppearance, { threshold: 0.4 });
const ourApproachButtonObserver = setupIntersectionObserver(animateHorizontalAppearance);

const contactUsObserver = setupIntersectionObserver(animateVisibility, { threshold: 0.25 });

const footerObserver = setupIntersectionObserver(animateVerticalAppearance, { threshold: 0.4 });

aboutUsObserver.observe(aboutUsSection);
galleryObserver.observe(masonryContainer);
heroTextOsberver.observe(heroText);
heroSliderOsberver.observe(heroSlider);
offerObserver.observe(offerSection);
ourApproachTextObserver.observe(ourApproachText);
ourApproachButtonObserver.observe(ourApproachButton);
ourApproachExampleObserver.observe(ourApproachExample);
contactUsObserver.observe(contactUs);

footer.forEach((text) => {
  footerObserver.observe(text);
});
