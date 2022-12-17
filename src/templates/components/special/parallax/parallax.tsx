import * as vanilla from "./parallax.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as React from "react";
import { Parallax } from "react-scroll-parallax";

interface Props {
  height: string;
  node: ImageDataLike;
  children: React.ReactNode;
  data: Queries.SpecialPageQuery;
  enableTranslateX?: boolean;
}
export const MyParallax: React.FC<Props> = ({
  height,
  node,
  children,
  data,
  enableTranslateX = false,
}) => {
  const image = getImage(node as unknown as ImageDataLike);
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
      {!enableTranslateX && (
        <Parallax translateY={["-50%", "0%"]}>
          <div className={vanilla.ParallaxBack}>
            {image && (
              <GatsbyImage
                image={image}
                alt="parallax image"
                className={vanilla.ParallaxBack}
                style={assignInlineVars({
                  [vanilla.ParallaxMinHeight]: `calc(${height} * 2)`,
                  [vanilla.ParallaxImageFilter]: data.markdownRemark
                    ?.frontmatter?.parallax?.imageFilter as string,
                })}
              />
            )}
          </div>
        </Parallax>
      )}
      {enableTranslateX && (
        <Parallax translateY={["-50%", "0%"]} translateX={["0%", "-50%"]}>
          <div className={vanilla.ParallaxBack}>
            {image && (
              <GatsbyImage
                image={image}
                alt="parallax image"
                className={vanilla.ParallaxBackEnableTranslateX}
                style={assignInlineVars({
                  [vanilla.ParallaxMinHeight]: `calc(${height} * 2)`,
                  [vanilla.ParallaxMinWidth]: `calc(${height} * 4)`,
                  [vanilla.ParallaxImageFilter]: data.markdownRemark
                    ?.frontmatter?.parallax?.imageFilter as string,
                })}
              />
            )}
          </div>
        </Parallax>
      )}
    </div>
  );
};
