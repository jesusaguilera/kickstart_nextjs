// Dependencies
import React from "react";
import Link from "next/link";

// Components
import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import Footer from "../../components/Footer";

const About = (props) => {
  return (
    <>
      <Header />
      <MainLayout title="About">
        <h1>About</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </MainLayout>
      <Footer />
    </>
  );
};

export default About;
