import * as React from "react";
import { useMediaQuery } from "react-responsive";
import * as vanilla from "./header.css";
import headerTitleBottomLineSVG1 from "../../images/header-title-bottom-line.svg";
import headerTitleBottomLineSVG2 from "../../images/header-title-bottom-line2.svg";
import headerTitleBottomLineSVG3 from "../../images/header-title-bottom-line3.svg";

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
  } else if (pageTitle === "Links") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG3;
  } else if (pageTitle === "Contact") {
    headerTitleBottomLineSVG = headerTitleBottomLineSVG2;
  }
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  //if window size is bigger than 600px, isDesktopOrMobile has "false"
  if (children != null) {
    return (
      <header>
        {isDesktopOrMobile && (
          <div>
            <div className={vanilla.HeaderSmartphone}>
              <h1>
                <div className={vanilla.HeaderTitle}>{pageTitle}</div>
              </h1>
              <div className={vanilla.HeaderTitleBottomLine}>
                <img src={headerTitleBottomLineSVG} />
              </div>
            </div>
            <div className={vanilla.HeaderDescriptionColumn}>
              <div className={vanilla.HeaderDescription}>{children}</div>
            </div>
          </div>
        )}
        {!isDesktopOrMobile && (
          <div>
            <div className={vanilla.Header}>
              <h1>
                <div className={vanilla.HeaderTitle}>{pageTitle}</div>
              </h1>
              <div className={vanilla.HeaderTitleBottomLine}>
                <img src={headerTitleBottomLineSVG} />
              </div>
            </div>
            <div className={vanilla.HeaderDescriptionColumn}>
              <div className={vanilla.HeaderDescription}>{children}</div>
            </div>
          </div>
        )}
      </header>
    );
  } else {
    return (
      <header>
        {isDesktopOrMobile && (
          <div>
            <div className={vanilla.HeaderSmartphone}>
              <h1>
                <div className={vanilla.HeaderTitle}>{pageTitle}</div>
              </h1>
              <div className={vanilla.HeaderTitleBottomLine}>
                <img src={headerTitleBottomLineSVG} />
              </div>
            </div>
          </div>
        )}
        {!isDesktopOrMobile && (
          <div>
            <div className={vanilla.Header}>
              <h1>
                <div className={vanilla.HeaderTitle}>{pageTitle}</div>
              </h1>
              <div className={vanilla.HeaderTitleBottomLine}>
                <img src={headerTitleBottomLineSVG} />
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }
};
export default Header;
