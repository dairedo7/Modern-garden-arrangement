export const setupIntersectionObserver = (callback, options) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target); // Unobserve the element after the action
        }
      });
    },
    { ...defaultOptions, ...options }
  );

  return observer;
};

// // Usage example
// const targetElement = document.querySelector('.target-element');
// const observer = setupIntersectionObserver((target) => {
//   // Element is visible in the viewport
//   // Take action, such as triggering animations or loading content
//   // Unobserve the element after the action
// });

// observer.observe(targetElement);

// export const setupIntersectionObserver = (callback, threshold = 0.2) => {
//   const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: threshold,
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         callback(entry.target);
//       }
//     });
//   }, observerOptions);

//   return observer;
// };
