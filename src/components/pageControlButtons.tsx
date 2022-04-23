import * as React from "react";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";
import * as vanilla from "./pageControlButtons.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  previousButtonText?: string;
  previousTitle?: string;
  previousLink?: string;
  nextButtonText?: string;
  nextTitle?: string;
  nextLink?: string;
  mainPageTitle: string;
  mainPageLink: string;
};

const PageControlButtons: React.FC<Props> = ({
  previousButtonText = "Previous",
  previousTitle = "",
  previousLink = "",
  nextButtonText = "Next",
  nextTitle = "",
  nextLink = "",
  mainPageTitle,
  mainPageLink,
}) => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <>
      {isDesktopOrMobile && (
        <div className={vanilla.ParentMini}>
          <div className={vanilla.PreviousGrid}>
            {previousLink != "" && (
              <Link to={previousLink}>
                {previousButtonText}
                <br />
                {previousTitle}
              </Link>
            )}
          </div>
          <div className={vanilla.CentorGrid}>
            <Link to={mainPageLink}>{mainPageTitle}</Link>
          </div>
          <div className={vanilla.NextGrid}>
            {nextLink != "" && (
              <Link to={nextLink}>
                {nextButtonText}
                <br />
                {nextTitle}
              </Link>
            )}
          </div>
        </div>
      )}
      {!isDesktopOrMobile && (
        <div className={vanilla.Parent}>
          <div className={vanilla.PreviousGrid}>
            <div className={vanilla.NextGridArrow}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className={vanilla.NextGridText}>
              {previousLink != "" && (
                <Link to={previousLink}>
                  {previousButtonText}
                  <br />
                  {previousTitle}
                </Link>
              )}
            </div>
          </div>
          <div className={vanilla.CentorGrid}>
            <Link to={mainPageLink}>{mainPageTitle}</Link>
          </div>
          <div className={vanilla.NextGrid}>
            {nextLink != "" && (
              <Link to={nextLink}>
                {nextButtonText}
                <br />
                {nextTitle}
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PageControlButtons;
