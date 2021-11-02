import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
import {
  workPostContainer,
  itemName,
  itemSpec,
  itemNameMini,
  itemSpecMini,
  boothPrice,
  mdContents,
} from "./workPostContent.module.css";
const WorkPostContent = ({ markdownRemark }) => {
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.hero);
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  //if window size is bigger than 600px, isDesktopOrMobile has "false"
  if (frontmatter.type === "song") {
    return (
      <div>
        <div className={workPostContainer}>
          <GatsbyImage image={image} aspectRatio={1} alt="" />
          <div>
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
        {isDesktopOrMobile && (
          <div>
            <div className={workPostContainer}>
              <GatsbyImage image={image} aspectRatio={1} alt="" />
              <div>
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
                <div className={itemSpecMini}>
                  {frontmatter.description_long}
                </div>
              </div>
            </div>
          </div>
        )}
        {!isDesktopOrMobile && (
          <div>
            <div className={workPostContainer}>
              <GatsbyImage image={image} aspectRatio={1} alt="" />
              <div>
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
          </div>
        )}
        <div
          className={mdContents}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }
};

export default WorkPostContent;
