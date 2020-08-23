// Dependencies
import React from "react";
import Head from "next/head";
import classNames from "classnames";

const MainLayout = (props) => {
  let wrapperClasses = classNames("o-wrapper", props.wrapperClass);
  return (
    <>
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
      <main className={wrapperClasses}>
        <div className="container">{props.children}</div>
      </main>
    </>
  );
};
export default MainLayout;
