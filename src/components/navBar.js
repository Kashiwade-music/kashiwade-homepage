import * as React from "react";
import { Link } from "gatsby";
import { navBar, navTop, navContentBox, navContent } from "./navBar.module.css";
const NavBar = () => {
  return (
    <nav className={navBar}>
      <Link to="/" className={navTop}>
        かしわで音楽工房
      </Link>
      <div className={navContentBox}>
        <Link to="/" className={navContent}>
          Home
        </Link>
        <Link to="/about" className={navContent}>
          About
        </Link>
        <Link to="/blog" className={navContent}>
          Blog
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
