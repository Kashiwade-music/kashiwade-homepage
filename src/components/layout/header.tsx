import headerTitleBottomLineSVG2 from "../../../resources/common/header-title-bottom-line2.svg";
import headerTitleBottomLineSVG3 from "../../../resources/common/header-title-bottom-line3.svg";
import headerTitleBottomLineSVG1 from "../../../resources/common/header-title-bottom-line.svg";
import * as vanilla from "./header.css";
import * as React from "react";

type Props = {
  pageTitle: string;
  children?: React.ReactNode;
};

const Header: React.FC<Props> = ({ pageTitle, children = null }) => {
  let headerTitleBottomLineSVG;
  if (pageTitle === "Profile") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG1;
  } else if (pageTitle === "Works") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG2;
  } else if (pageTitle == "Special") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG1;
  } else if (pageTitle === "Links") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG3;
  } else if (pageTitle === "Contact") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG2;
  }

  if (children != null) {
    return (
      <header>
        <div className={vanilla.Header}>
          <h1>
            <div className={vanilla.HeaderTitle}>{pageTitle}</div>
          </h1>
          <div className={vanilla.HeaderTitleBottomLine}>
            <img src={headerTitleBottomLineSVG} alt="" />
          </div>
        </div>
        <div className={vanilla.HeaderDescriptionColumn}>
          <div className={vanilla.HeaderDescription}>{children}</div>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className={vanilla.Header}>
          <h1>
            <div className={vanilla.HeaderTitle}>{pageTitle}</div>
          </h1>
          <div className={vanilla.HeaderTitleBottomLine}>
            <img src={headerTitleBottomLineSVG} alt="" />
          </div>
        </div>
      </header>
    );
  }
};
export default Header;
