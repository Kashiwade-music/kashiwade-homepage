import * as React from "react";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";
import * as vanilla from "./pageControlButtons.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

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
          {nextLink != "" && (
            <Link to={nextLink} className={vanilla.LinkArea}>
              <div className={vanilla.NextGrid}>
                <div className={vanilla.NextGridIcon}>
                  <BsChevronLeft size={45} color="#666" />
                </div>
                <div className={vanilla.NextGridNextText}>{nextButtonText}</div>
                <div className={vanilla.NextGridSubTitle}>{nextTitle}</div>
              </div>
            </Link>
          )}
          {!(nextLink != "") && <div className={vanilla.NextGrid} />}
          <div className={vanilla.CentorGrid}></div>
          {previousLink != "" && (
            <Link to={previousLink} className={vanilla.LinkArea}>
              <div className={vanilla.PreviousGrid}>
                <div className={vanilla.PreviousGridIcon}>
                  <BsChevronRight size={45} color="#666" />
                </div>
                <div className={vanilla.PreviousGridPreviousText}>
                  {previousButtonText}
                </div>
                <div className={vanilla.PreviousGridSubTitle}>
                  {previousTitle}
                </div>
              </div>
            </Link>
          )}
          {!(previousLink != "") && <div className={vanilla.PreviousGrid} />}
        </div>
      )}
    </>
  );
};

export default PageControlButtons;
