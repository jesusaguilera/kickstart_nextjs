// Dependencies
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Components
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Footer from "../components/Footer";

export default function Home() {
  const x = useMotionValue(0);
  const input = [-500, 0, 200];
  const output = [0, 1, 0];
  const colorOutput = ["#f00", "#00f", "#0f0"];
  const opacity = useTransform(x, input, output);
  const color = useTransform(x, input, colorOutput);

  return (
    <div>
      <MainLayout>
        <h1>Welcome!</h1>
        <motion.div
          drag="x"
          style={{ x, opacity, height: 30, width: 300, backgroundColor: color }}
          onDrag={() => {
            console.log("Get", x.get());
            console.log("Velocity", x.getVelocity());
          }}
        />
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/bio">
          <a>Bio</a>
        </Link>
        <Link href="/users">
          <a>Users Api</a>
        </Link>
      </MainLayout>
    </div>
  );
}
