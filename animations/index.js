const animations = {
  opacityEntry: {
    opacity: 0,
  },
  opacityAnimate: {
    opacity: 1,
  },
  opacityExit: {
    opacity: 0,
  },
  leftEntry: {
    position: "relative",
    left: 400,
    opacity: 0,
  },
  leftAnimate: {
    position: "relative",
    opacity: 1,
    left: 0,
  },
  leftExit: {
    position: "relative",
    filter: `invert()`,
    left: -400,
    opacity: 0,
  },
};

export default animations;
