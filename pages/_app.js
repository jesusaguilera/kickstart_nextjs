// Dependencies
import React from "react";
import Head from "next/head";

// Styles
import "../assets/scss/main.scss";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps, router }) => {
  let pathName = router.route.slice(1);
  let title =
    pathName === ""
      ? "Home"
      : `${pathName.charAt(0).toUpperCase()}${pathName.slice(1)}`;
  return (
    <>
      <Head>
        <title>{`${title} — My Nextjs Page`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="description" content="My first Nextjs page" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
