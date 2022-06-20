import * as React from "react";
import { Link } from "gatsby";
import Drawer from "./drawer";
import { BiMenu } from "react-icons/bi";
import * as vanilla from "./navbarSmartPhone.css";

type Props = {
  currentPage: string;
};
const NavBarSmartPhone = (props: Props) => {
  let [profileClass, worksClass, linksClass, contactClass] = [
    vanilla.NavContent,
    vanilla.NavContent,
    vanilla.NavContent,
    vanilla.NavContent,
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
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

        <button
          onClick={toggleDrawer}
          className={vanilla.NavHumbergButton}
          aria-label="Menu"
        >
          <BiMenu color="black" size={35} style={{ verticalAlign: "middle" }} />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          size={250}
        >
          <ul className={vanilla.NavUL}>
            <li>
              <Link to="/profile" className={profileClass}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/works" className={worksClass}>
                Works
              </Link>
            </li>
            <li>
              <Link to="/links" className={linksClass}>
                Links
              </Link>
            </li>
            <li>
              <Link to="/contact" className={contactClass}>
                Contact
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBarSmartPhone;
