import * as React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";

import * as vanilla from "./contentsLinkBoxes.css";

const ContentLinkBoxes = (
  data: Queries.IndexPageQuery | Queries.WorksPageQuery
) => {
  return (
    <div className={vanilla.ContentLinkBoxAreaCSS}>
      {data.allMarkdownRemark.edges.map((node) => {
        if (node.node.frontmatter?.hero != null) {
          // @ts-ignore
          const image = getImage(node.node.frontmatter.hero);
          return (
            <Link
              to={node.node.frontmatter?.slug as string}
              className={vanilla.LinkTextDecoration}
            >
              <div className={vanilla.Box}>
                {<GatsbyImage image={image as IGatsbyImageData} alt="" />}
                <div className={vanilla.Title}>
                  {node.node.frontmatter?.title}
                </div>

                <div className={vanilla.Description}>
                  {node.node.frontmatter?.description}
                </div>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default ContentLinkBoxes;
