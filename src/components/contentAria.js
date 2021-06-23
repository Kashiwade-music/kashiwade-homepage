import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import ContentLinkBox from "../components/contentLinkBox";
import { contentAreaCSS } from "./contentArea.module.css";
const ContentArea = ({ children }) => {
  return <div className={contentAreaCSS}>{children}</div>;
};

export default ContentArea;
