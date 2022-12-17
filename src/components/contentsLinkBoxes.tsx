import * as vanilla from "./contentsLinkBoxes.css";
import { Link } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import * as React from "react";

const ContentLinkBoxes = (data: Queries.WorksPageQuery) => {
  return (
    <div className={vanilla.ContentLinkBoxAreaCSS}>
      {data.allMarkdownRemark.edges.map((node, idx) => {
        if (node.node.frontmatter?.hero != null) {
          const image = getImage(
            node.node.frontmatter.hero as unknown as ImageDataLike
          );
          return (
            <Link
              to={node.node.frontmatter?.slug as string}
              className={vanilla.LinkTextDecoration}
              title={node.node.frontmatter.title as string}
              key={idx}
            >
              <div className={vanilla.Box}>
                <GatsbyImage image={image as IGatsbyImageData} alt="" />
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
