import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import ContentLinkBox from "../components/contentLinkBox";
import { contentAreaCSS, outer } from "./contentArea.module.css";
const ContentArea = ({ children }) => {
  return (
    <div className={outer}>
      <div className={contentAreaCSS}>{children}</div>
    </div>
  );
};

export default ContentArea;
