import * as React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as vanilla from "./parallax.css";
import { Parallax } from "react-scroll-parallax";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
  height: string;
  node: ImageDataLike;
  children: React.ReactNode;
  data: Queries.SpecialPageQuery;
}
export const MyParallax: React.FC<Props> = ({
  height,
  node,
  children,
  data,
}) => {
  const image = getImage(node as any);
  return (
    <div
      className={vanilla.ParallaxParent}
      style={assignInlineVars({
        [vanilla.ParallaxHeight]: height,
      })}
    >
      <div
        className={vanilla.ParallaxFront}
        style={assignInlineVars({
          [vanilla.ParallaxOverlayColor]: data.markdownRemark?.frontmatter
            ?.parallax?.overlayColor as string,
          [vanilla.ParallaxOverlayOpacity]: data.markdownRemark?.frontmatter
            ?.parallax?.overlayOpacity as unknown as string,
          [vanilla.ParallaxTextColor]: data.markdownRemark?.frontmatter
            ?.parallax?.textColor as string,
        })}
      >
        {children}
      </div>
      <Parallax translateY={["-50%", "0%"]}>
        <div className={vanilla.ParallaxBack}>
          {image && (
            <GatsbyImage
              image={image}
              alt="parallax image"
              className={vanilla.ParallaxBack}
              style={assignInlineVars({
                [vanilla.ParallaxMinHeight]: `calc(${height} * 2)`,
                [vanilla.ParallaxImageFilter]: data.markdownRemark?.frontmatter
                  ?.parallax?.imageFilter as string,
              })}
            />
          )}
        </div>
      </Parallax>
    </div>
  );
};
