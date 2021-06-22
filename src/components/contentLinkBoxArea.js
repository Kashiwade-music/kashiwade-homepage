import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import ContentLinkBox from "../components/contentLinkBox";
import { contentLinkBoxAreaCSS } from "./contentLinkBoxArea.module.css";
const contentLinkBoxArea = ({ edges }) => {
  return (
    <div className={contentLinkBoxAreaCSS}>
      {edges.map((node) => (
        <ContentLinkBox node={node.node} />
      ))}
    </div>
  );
};

export default contentLinkBoxArea;