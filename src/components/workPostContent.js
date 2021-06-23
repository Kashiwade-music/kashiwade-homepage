import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import MediaQuery from "react-responsive";
import { Link, graphql } from "gatsby";
import {
  workPostContainer,
  details,
  itemName,
  itemSpec,
  itemNameMini,
  itemSpecMini,
  boothPrice,
  mdContents,
} from "./workPostContent.module.css";
const workPostContent = ({ markdownRemark }) => {
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.hero);
  if (frontmatter.type == "song") {
    return (
      <div>
        <div className={workPostContainer}>
          <GatsbyImage image={image} aspectRatio={1} />
          <div className={details}>
            <div className={itemName}>Title</div>
            <h1 className={itemSpec}>{frontmatter.title}</h1>
            <div className={itemName}>Release Date</div>
            <div className={itemSpec}>{frontmatter.date}</div>
            <div className={itemName}>Description</div>
            <div className={itemSpec}>{frontmatter.description_long}</div>
          </div>
        </div>
        <div
          className={mdContents}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <MediaQuery query="(max-width: 1100px)">
          <div className={workPostContainer}>
            <GatsbyImage image={image} aspectRatio={1} />
            <div className={details}>
              <div className={itemNameMini}>Title</div>
              <h1 className={itemSpecMini}>{frontmatter.title}</h1>
              <div className={itemNameMini}>Release Date</div>
              <div className={itemSpecMini}>{frontmatter.date}</div>
              <div className={boothPrice}>
                <div>
                  <div className={itemNameMini}>Booth</div>
                  <div className={itemSpecMini}>{frontmatter.booth}</div>
                </div>
                <div>
                  <div className={itemNameMini}>Price</div>
                  <div className={itemSpecMini}>{frontmatter.price}</div>
                </div>
              </div>
              <div className={itemNameMini}>Description</div>
              <div className={itemSpecMini}>{frontmatter.description_long}</div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 1100px)">
          <div className={workPostContainer}>
            <GatsbyImage image={image} aspectRatio={1} />
            <div className={details}>
              <div className={itemName}>Title</div>
              <h1 className={itemSpec}>{frontmatter.title}</h1>
              <div className={itemName}>Release Date</div>
              <div className={itemSpec}>{frontmatter.date}</div>

              <div className={itemName}>Booth</div>
              <div className={itemSpec}>{frontmatter.booth}</div>

              <div className={itemName}>Price</div>
              <div className={itemSpec}>{frontmatter.price}</div>

              <div className={itemName}>Description</div>
              <div className={itemSpec}>{frontmatter.description_long}</div>
            </div>
          </div>
        </MediaQuery>
        <div
          className={mdContents}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }
};

export default workPostContent;
