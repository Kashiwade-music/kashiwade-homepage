import * as React from "react";
import { Link } from "gatsby";
import MediaQuery from "react-responsive";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {
  navBar,
  navTop,
  navContentBox,
  navContent,
  navContentActive,
  navUlSmartphone,
  navUlContent,
  navHumbergButton,
} from "./navBar.module.css";
const NavBar = ({ currentPage }) => {
  let [profileClass, worksClass, linksClass] = [
    navContent,
    navContent,
    navContent,
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  if (currentPage === "profile") {
    profileClass = navContentActive;
  } else if (currentPage === "works") {
    worksClass = navContentActive;
  } else if (currentPage === "links") {
    linksClass = navContentActive;
  }
  return (
    <nav className={navBar}>
      <MediaQuery query="(max-width: 600px)">
        <Link to="/" className={navTop}>
          Kashiwade music
        </Link>

        <button onClick={toggleDrawer} className={navHumbergButton}>
          <svg
            height="32px"
            id="Layer_1"
            style={{ enableBackground: "new 0 0 32 32" }}
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        </button>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
          <ul className={navUlSmartphone}>
            <li className={navUlContent}>
              <Link to="/profile" className={profileClass}>
                Profile
              </Link>
            </li>
            <li className={navUlContent}>
              <Link to="/works" className={worksClass}>
                Works
              </Link>
            </li>
            <li className={navUlContent}>
              <Link to="/links" className={linksClass}>
                Links
              </Link>
            </li>
          </ul>
        </Drawer>
      </MediaQuery>
      <MediaQuery query="(min-width: 600px)">
        <Link to="/" className={navTop}>
          Kashiwade music
        </Link>

        <div className={navContentBox}>
          <Link to="/profile" className={profileClass}>
            Profile
          </Link>
          <Link to="/works" className={worksClass}>
            Works
          </Link>
          <Link to="/links" className={linksClass}>
            Links
          </Link>
        </div>
      </MediaQuery>
    </nav>
  );
};
export default NavBar;
