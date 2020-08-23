// Dependencies
import Link from "next/link";

// Components
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <h1>Welcome!</h1>
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
