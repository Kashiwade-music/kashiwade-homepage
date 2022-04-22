import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link, PageProps } from "gatsby";

import * as vanilla from "./contentLinkBoxes.css";

const ContentLinkBoxes: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  return (
    <div className={vanilla.ContentLinkBoxAreaCSS}>
      {data.allMarkdownRemark.edges.map((node) => {
        // @ts-ignore
        const image = getImage(node.node.frontmatter?.hero);

        return (
          <Link
            to={node.node.frontmatter?.slug as string}
            className={vanilla.LinkTextDecoration}
          >
            <div className={vanilla.Box}>
              {
                // @ts-ignore
                <GatsbyImage image={image} aspectRatio={1} alt="" />
              }
              <div className={vanilla.Title}>
                {node.node.frontmatter?.title}
              </div>

              <div className={vanilla.Description}>
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
