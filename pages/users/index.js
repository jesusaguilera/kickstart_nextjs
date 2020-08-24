// Dependencies
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Components
import MainLayout from "../../components/MainLayout";

const Users = (props) => {
  return (
    <>
      <MainLayout
        wrapperClass="wrapper__bio"
        pageTransitionEntry="opacityEntry"
        pageTransitionAnimate="opacityAnimate"
        pageTransitionExit="opacityExit"
      >
        <h1>Users</h1>
        {props.data.results.map((user) => {
          return (
            <div className="o-padding--default" key={user.id}>
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
            </div>
          );
        })}
        <Link href="/">
          <a>Home</a>
        </Link>
      </MainLayout>
    </>
  );
};
export const getStaticProps = async () => {
  const res = await fetch("https://randomuser.me/api/?results=5");
  const data = res.ok && (await res.json());

  return {
    props: {
      data,
    },
  };
};

export default Users;
