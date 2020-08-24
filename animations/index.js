const easing = [0.6, -0.05, 0.01, 0.99];

const animations = {
  opacityEntry: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
      // staggerChildren: 0.1,
      // delayChildren: 0.5,
    },
  },
  opacityAnimate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      // staggerChildren: 0.1,
      // delayChildren: 0.5,
    },
  },
  opacityExit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
      // staggerChildren: 0.1,
      // delayChildren: 0.5,
    },
  },
  leftEntry: {
    position: "relative",
    left: 400,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
      // staggerChildren: 0.1,
      // delayChildren: 0.5,
      // type: "spring",
    },
  },
  leftAnimate: {
    position: "relative",
    opacity: 1,
    left: 0,
    transition: {
      duration: 0.6,
      ease: easing,
      // staggerChildren: 0.1,
      // delayChildren: 0.5,
      // type: "spring",
    },
  },
  leftExit: {
    position: "relative",
    filter: `invert()`,
    left: -400,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
      // staggerChildren: 0.1,
      // delayChildren: 0.5,
      // type: "spring",
    },
  },
};

export default animations;
