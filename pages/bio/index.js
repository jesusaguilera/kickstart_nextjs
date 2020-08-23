// Dependencies
import React from "react";
import Link from "next/link";

// Components
import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import Footer from "../../components/Footer";

const Bio = (props) => {
  return (
    <>
      <Header title="Bio" />
      <MainLayout wrapperClass="wrapper__bio">
        <h1>Bio</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Bio;
