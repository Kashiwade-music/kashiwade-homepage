import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  linkTextDecoration,
  box,
  title,
  tags,
  tagUl,
  tag,
  description,
} from "./contentLinkBox.module.css";
const contentLinkBox = ({ node }) => {
  const image = getImage(node.frontmatter.hero);
  return (
    <Link to={node.frontmatter.slug} className={linkTextDecoration}>
      <div className={box}>
        <GatsbyImage image={image} aspectRatio={1} alt="" />
        <div className={title}>{node.frontmatter.title}</div>
        <div className={tags}>
          <ul className={tagUl}>
            <li>
              <span className={tag}>{node.frontmatter.tag}</span>
            </li>
          </ul>
        </div>
        <div className={description}>{node.frontmatter.description}</div>
      </div>
    </Link>
  );
};

export default contentLinkBox;
