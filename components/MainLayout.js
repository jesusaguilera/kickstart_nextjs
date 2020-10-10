// Dependencies
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";

// Hooks
import useWindowSize from "../hooks/useWindowSize";

const MainLayout = (props) => {
  let wrapperClasses = classNames("o-wrapper", props.wrapperClass);

  let wrapper = useRef(null);

  let windowSize = useWindowSize();

  useEffect(()=> {
    document.body.style.height = `${wrapper.current.getBoundingClientRect().height}px`
  }, [windowSize.height])


  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className={wrapperClasses}
      ref={wrapper}
    >
      {props.children}
    </motion.main>
  );
};

MainLayout.propTypes = {
  wrapperClass: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default MainLayout;
