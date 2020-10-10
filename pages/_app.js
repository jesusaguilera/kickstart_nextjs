// Dependencies
import { AnimatePresence } from "framer-motion";

// Styles
import "../assets/scss/main.scss";

// Components
import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useEffect} from "react";

const MyApp = ({ Component, pageProps, router }) => {
  let pathName = router.route.slice(1);
  let title = pathName === "" 
    ? "Home" 
    : `${pathName.charAt(0).toUpperCase()}${pathName.slice(1)}`;

  useEffect(()=> {
    document.getElementById('__next').classList.add("o-wrapper__next");
  }, [])

  return (
    <>
      <Head title={title}/>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default MyApp;
