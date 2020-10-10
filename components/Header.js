// Dependencies
import React from "react";
import Head from "next/head";
import Link from "next/link";

// Components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="c-header">
      <Link href="/">Home</Link>
      <Nav />
    </header>
  );
};

export default Header;
