// Dependencies
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Animations
import { fadeInLeft, stagger, easing } from "../../assets/animations";

// Components
import MainLayout from "../../components/MainLayout";

const Users = (props) => {
  return (
    <>
      <MainLayout>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1>Users</h1>
        </motion.div>
        <motion.div variants={stagger}>
          {props.data.results.map((user) => {
            return (
              <motion.div
                variants={fadeInLeft}
                className="o-padding--default"
                key={user.id}
              >
                <motion.img
                  src={user.picture.thumbnail}
                  whileHover={{
                    scale: [1, 1.4, 1.2],
                    filter: [
                      "hue-rotate(0) contrast(100%)",
                      "hue-rotate(360deg) contrast(200%)",
                      "hue-rotate(45deg) contrast(300%)",
                      "hue-rotate(0) contrast(100%)",
                    ],
                    transition: {
                      duration: 0.2,
                      // delay: 1,
                    },
                  }}
                />
                <p>
                  {" "}
                  {user.name.title} {user.name.first} {user.name.last}{" "}
                </p>
                <p>{user.email}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </MainLayout>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch("https://randomuser.me/api/?results=5");
  const data = res.ok && (await res.json());

  return {
    props: {
      data,
    },
  };
};

export default Users;
