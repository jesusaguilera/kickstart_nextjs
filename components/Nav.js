// Dependencies
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="c-nav">
        <Link href="/about">
          <a className="c-nav__link">About</a>
        </Link>
        <Link href="/bio">
          <a className="c-nav__link">Bio</a>
        </Link>
        <Link href="/users">
          <a className="c-nav__link">Users Api</a>
        </Link>
    </nav>
  );
};
export default Nav;
