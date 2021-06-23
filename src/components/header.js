import * as React from "react";
import MediaQuery from "react-responsive";
import "react-modern-drawer/dist/index.css";
import {
  header,
  headerSmartphone,
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
        <MediaQuery query="(max-width: 600px)">
          <div className={headerSmartphone}>
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
        </MediaQuery>
        <MediaQuery query="(min-width: 600px)">
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
        </MediaQuery>
      </header>
    );
  } else {
    return (
      <header>
        <MediaQuery query="(max-width: 600px)">
          <div className={headerSmartphone}>
            <h1>
              <div className={headerTitle}>{pageTitle}</div>
            </h1>
            <div className={headerTitleBottomLine}>
              <img src={headerTitleBottomLineSVG} />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 600px)">
          <div className={header}>
            <h1>
              <div className={headerTitle}>{pageTitle}</div>
            </h1>
            <div className={headerTitleBottomLine}>
              <img src={headerTitleBottomLineSVG} />
            </div>
          </div>
        </MediaQuery>
      </header>
    );
  }
};
export default Header;
