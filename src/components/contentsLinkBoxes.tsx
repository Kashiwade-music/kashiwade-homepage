import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link, PageProps } from "gatsby";

import { contentLinkBoxAreaCSS } from "./contentLinkBoxArea.module.css";

const contentLinkBox = ({ node }) => {
  const image = getImage(node.frontmatter.hero);
  return (
    <Link to={node.frontmatter.slug} className={linkTextDecoration}>
      <div className={box}>
        <GatsbyImage image={image} aspectRatio={1} alt="" />
        <div className={title}>{node.frontmatter.title}</div>

        <div className={description}>{node.frontmatter.description}</div>
      </div>
    </Link>
  );
};

const ContentLinkBoxes: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  return (
    <div className={contentLinkBoxAreaCSS}>
      {data.allMarkdownRemark.edges.map((node) => {
        // @ts-ignore
        const image = getImage(node.node.frontmatter?.hero);
        return (
          <Link
            to={node.node.frontmatter?.slug as string}
            className={linkTextDecoration}
          >
            <div className={box}>
              <GatsbyImage image={image} aspectRatio={1} alt="" />
              <div className={title}>{node.node.frontmatter?.title}</div>

              <div className={description}>
                {node.node.frontmatter?.description}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ContentLinkBoxes;
