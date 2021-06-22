import * as React from "react";
import { Link } from "gatsby";
import "react-modern-drawer/dist/index.css";
import { StaticImage } from "gatsby-plugin-image";
import {
  header,
  headerTitle,
  headerTitleBottomLine,
  headerDescriptionColumn,
  headerDescription,
} from "./header.module.css";
import headerTitleBottomLineSVG1 from "../images/header-title-bottom-line.svg";
import headerTitleBottomLineSVG2 from "../images/header-title-bottom-line2.svg";
import headerTitleBottomLineSVG3 from "../images/header-title-bottom-line3.svg";

const Header = ({ pageTitle, children }) => {
  let headerTitleBottomLineSVG;
  if (pageTitle === "Profile") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG1;
  } else if (pageTitle === "Works") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG2;
  } else if (pageTitle === "Links") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG3;
  }
  if (children != null) {
    return (
      <header>
        <div className={header}>
          <h1>
            <div className={headerTitle}>{pageTitle}</div>
          </h1>
          <div className={headerTitleBottomLine}>
            <img src={headerTitleBottomLineSVG} />
          </div>
        </div>
        <div className={headerDescriptionColumn}>
          <div className={headerDescription}>{children}</div>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className={header}>
          <h1>
            <div className={headerTitle}>{pageTitle}</div>
          </h1>
          <div className={headerTitleBottomLine}>
            <img src={headerTitleBottomLineSVG} />
          </div>
        </div>
      </header>
    );
  }
};
export default Header;
