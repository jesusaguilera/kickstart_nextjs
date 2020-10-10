// Dependencies
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="c-nav">
        <Link href="/about" className="c-nav__link">
          <a>About</a>
        </Link>
        <Link href="/bio" className="c-nav__link">
          <a>Bio</a>
        </Link>
        <Link href="/users" className="c-nav__link">
          <a>Users Api</a>
        </Link>
    </nav>
  );
};
export default Nav;
