import * as React from "react";
import { Link } from "gatsby";
import MediaQuery from "react-responsive";
import Drawer from "./drawer";
import * as vanilla from "./navbar.css";

type Props = {
  currentPage: string;
};
const NavBar = (props: Props) => {
  let [profileClass, worksClass, linksClass] = [
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
  }
  //userMediaQueryを利用するとcssが当たらなくなるのでこのまま
  return (
    <nav className={vanilla.NavBar}>
      <MediaQuery query="(max-width: 600px)">
        <Link to="/" className={vanilla.NavTopSmartphone}>
          Kashiwade.work
        </Link>

        <button onClick={toggleDrawer} className={vanilla.NavHumbergButton}>
          <div className={vanilla.NavHumbergButtonSVG}>
            <svg
              height="32px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
            >
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          </div>
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          size={300}
        >
          <ul className={vanilla.NavUlSmartphone}>
            <li className={vanilla.NavUlContent}>
              <Link to="/profile" className={profileClass}>
                Profile
              </Link>
            </li>
            <li className={vanilla.NavUlContent}>
              <Link to="/works" className={worksClass}>
                Works
              </Link>
            </li>
            <li className={vanilla.NavUlContent}>
              <Link to="/links" className={linksClass}>
                Links
              </Link>
            </li>
          </ul>
        </Drawer>
      </MediaQuery>
      <MediaQuery query="(min-width: 601px)">
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
        </div>
      </MediaQuery>
    </nav>
  );
};

export default NavBar;
