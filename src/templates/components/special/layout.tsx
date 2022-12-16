import * as React from "react";
import * as vanilla from "./layout.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface Props {
  children: React.ReactNode;
  data: Queries.SpecialPageQuery;
  localBackground?: string;
}

export const Layout: React.FC<Props> = ({
  children,
  data,
  localBackground = null,
}) => {
  const backgroundColor = localBackground
    ? localBackground
    : (data.markdownRemark?.frontmatter?.theme?.base as string);
  const backgroundImage = getImage(
    data.markdownRemark?.frontmatter?.mainBackgroundImage as any
  );
  return (
    <div
      className={vanilla.LayoutWrapper}
      style={assignInlineVars({
        [vanilla.BackgroundColor]: backgroundColor,
      })}
    >
      <div className={vanilla.BackgroundLayerPositioner}>
        <GatsbyImage
          image={backgroundImage as any}
          alt="background"
          className={vanilla.BackgroundLayer}
        />

        <div
          className={vanilla.BackgroundMixBlendLayer}
          style={assignInlineVars({
            [vanilla.BackgroundColor]: backgroundColor,
          })}
        />
        <div
          className={vanilla.BackgroundGradientLayer}
          style={assignInlineVars({
            [vanilla.BackgroundColor]: backgroundColor,
          })}
        />
      </div>
      <div className={vanilla.Layout}>
        <div className={vanilla.LayoutInner}>{children}</div>
      </div>
    </div>
  );
};
