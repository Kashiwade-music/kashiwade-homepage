import * as React from "react";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";
import * as vanilla from "./pageControlButtons.css";
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
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <>
      <div className={vanilla.Parent}>
        {nextLink != "" && (
          <Link to={nextLink} className={vanilla.LinkArea}>
            <div className={vanilla.NextGrid}>
              <div className={vanilla.NextGridIcon}>
                <BsChevronLeft size={45} color="#666" />
              </div>
              <div
                className={
                  isMobile
                    ? vanilla.NextGridNextTextMobile
                    : vanilla.NextGridNextText
                }
              >
                {nextButtonText}
              </div>

              {!isMobile && (
                <div className={vanilla.NextGridSubTitle}>{nextTitle}</div>
              )}
            </div>
          </Link>
        )}
        {!(nextLink != "") && <div className={vanilla.NextGrid} />}
        {previousLink != "" && (
          <Link to={previousLink} className={vanilla.LinkArea}>
            <div className={vanilla.PreviousGrid}>
              <div className={vanilla.PreviousGridIcon}>
                <BsChevronRight size={45} color="#666" />
              </div>
              <div
                className={
                  isMobile
                    ? vanilla.PreviousGridPreviousTextMobile
                    : vanilla.PreviousGridPreviousText
                }
              >
                {previousButtonText}
              </div>
              {!isMobile && (
                <div className={vanilla.PreviousGridSubTitle}>
                  {previousTitle}
                </div>
              )}
            </div>
          </Link>
        )}
        {!(previousLink != "") && <div className={vanilla.PreviousGrid} />}
      </div>
    </>
  );
};

export default PageControlButtons;
