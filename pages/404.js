// Dependencies
import Link from "next/link";

// Components
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <MainLayout>
        <h1>Ups!, 404 error</h1>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/bio">
          <a>Bio</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </MainLayout>
      <Footer />
    </div>
  );
}
