// Dependencies
import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";

const MainLayout = (props) => {
  let wrapperClasses = classNames("o-wrapper", props.wrapperClass);

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className={wrapperClasses}
    >
      {props.children}
    </motion.main>
  );
};

MainLayout.propTypes = {
  wrapperClass: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default MainLayout;
