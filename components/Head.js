// Dependencies
import React from "react";
import Head from "next/head";

const Header = (props) => {
  return (
    <Head>
      <title>{props.title ? props.title : "My Nextjs Page"}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta name="description" content="My first Nextjs page" />
    </Head>
  );
};

export default Header;
