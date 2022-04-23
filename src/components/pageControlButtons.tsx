import * as React from "react";

import { Link } from "gatsby";
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
  return (
    <>
      {previousLink != "" && (
        <Link to={previousLink}>
          {previousButtonText}
          <br />
          {previousTitle}
        </Link>
      )}
      <Link to={mainPageLink}>{mainPageTitle}</Link>
      {nextLink != "" && (
        <Link to={nextLink}>
          {nextButtonText}
          <br />
          {nextTitle}
        </Link>
      )}
    </>
  );
};

export default PageControlButtons;
