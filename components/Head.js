// Dependencies
import React from "react";
import PropTypes from "prop-types";
import HeadNext from "next/head";

const Head = (props) => {
  return (
    <HeadNext>
      <title>{props.title ? props.title : "My Nextjs Page"}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta name="description" content="My first Nextjs page" />
    </HeadNext>
  );
};

Head.propTypes = {
  title: PropTypes.string
}

export default Head;
