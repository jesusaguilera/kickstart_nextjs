// Our custom easing
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInLeft = {
  initial: {
    x: 400,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      // delayChildren: 3,
    },
  },
};

export { fadeInLeft, stagger };
