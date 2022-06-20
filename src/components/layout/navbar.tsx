import * as React from "react";
import { Link } from "gatsby";
import * as vanilla from "./navbar.css";

type Props = {
  currentPage: string;
};
const NavBar = (props: Props) => {
  let [profileClass, worksClass, linksClass, contactClass] = [
    vanilla.NavContent,
    vanilla.NavContent,
    vanilla.NavContent,
    vanilla.NavContent,
  ];
  if (props.currentPage === "profile") {
    profileClass = vanilla.NavContentActive;
  } else if (props.currentPage === "works") {
    worksClass = vanilla.NavContentActive;
  } else if (props.currentPage === "links") {
    linksClass = vanilla.NavContentActive;
  } else if (props.currentPage === "contact") {
    contactClass = vanilla.NavContentActive;
  }
  return (
    <nav className={vanilla.NavBar}>
      <div className={vanilla.NavContentArea}>
        <Link to="/" className={vanilla.NavTop}>
          Kashiwade.work
        </Link>

        <div className={vanilla.NavContentBox}>
          <Link to="/profile" className={profileClass}>
            Profile
          </Link>
          <Link to="/works" className={worksClass}>
            Works
          </Link>
          <Link to="/links" className={linksClass}>
            Links
          </Link>
          <Link to="/contact" className={contactClass}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
