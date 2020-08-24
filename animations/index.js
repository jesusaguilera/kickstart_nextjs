const animations = {
  opacityEntry: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
  opacityAnimate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  opacityExit: {
    opacity: 0,
    transition: {
      type: "spring",
    },
  },
  leftEntry: {
    position: "relative",
    left: 400,
    opacity: 0,
    transition: {
      // duration: 2,
      type: "spring",
    },
  },
  leftAnimate: {
    position: "relative",
    opacity: 1,
    left: 0,
    transition: {
      // duration: 2,
      type: "spring",
    },
  },
  leftExit: {
    position: "relative",
    filter: `invert()`,
    left: -400,
    opacity: 0,
    transition: {
      type: "spring",
      // duration: 2,
    },
  },
};

export default animations;
