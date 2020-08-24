// Dependencies
import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MainLayout = (props) => {
  let wrapperClasses = classNames("o-wrapper", props.wrapperClass);
  const router = useRouter();

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className={wrapperClasses}
    >
      <div className="container">{props.children}</div>
    </motion.main>
  );
};
export default MainLayout;
