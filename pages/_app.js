// Dependencies
import { motion } from "framer-motion";

// Styles
import "../assets/scss/main.scss";

// Animations
import animations from "../animations";

console.log(animations);

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <motion.div
      key={router.route}
      initial="leftEntry"
      animate="leftAnimate"
      variants={animations}
    >
      <Component {...pageProps} />
    </motion.div>
  );
};

export default MyApp;
