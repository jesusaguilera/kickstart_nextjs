// Dependencies
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Components
import Header from "../../components/Header";
import MainLayout from "../../components/MainLayout";
import Footer from "../../components/Footer";

const About = (props) => {
  return (
    <MainLayout title="About">
      <motion.div initial={{ y: 300 }} animate={{ y: 0 }}>
        <h1>About</h1>
      </motion.div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </MainLayout>
  );
};

export default About;
