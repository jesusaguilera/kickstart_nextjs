// Dependencies
import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// Animations
import animations from "../animations";

const MainLayout = (props) => {
  let wrapperClasses = classNames("o-wrapper", props.wrapperClass);
  const router = useRouter();

  return (
    <motion.main
      initial={
        props.noPageTransition
          ? false
          : !props.pageTransitionEntry
          ? "leftEntry"
          : props.pageTransitionEntry
      }
      animate={
        props.noPageTransition
          ? false
          : !props.pageTransitionAnimate
          ? "leftAnimate"
          : props.pageTransitionAnimate
      }
      exit={
        props.noPageTransition
          ? false
          : !props.pageTransitionExit
          ? "leftExit"
          : props.pageTransitionExit
      }
      variants={animations}
      className={wrapperClasses}
    >
      <div className="container">{props.children}</div>
    </motion.main>
  );
};
export default MainLayout;
