import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { PageProps } from "gatsby";
import * as vanilla from "./headers.css";
import * as vanilla_tenkoureirou from "./tenkoureirou.css";
import * as vanilla_aquilegia from "./aquilegia.css";
import { useMediaQuery } from "react-responsive";

const ScrollAnimation: React.FC<Queries.SpecialPageQuery> = (data) => {
  return (
    <div className={vanilla.ScrollWrapper}>
      <a
        href="#scroll"
        className={vanilla.Scroll}
        style={assignInlineVars({
          [vanilla.scroll_main_color]: data.markdownRemark?.frontmatter?.header
            ?.scrollMainColor as string,
          [vanilla.scroll_background_color]: data.markdownRemark?.frontmatter
            ?.header?.scrollBackgroundColor as string,
        })}
      >
        Scroll
      </a>
    </div>
  );
};

export const 天光玲瓏: React.FC<Queries.SpecialPageQuery> = (data) => {
  const headerImage = getImage(
    data.markdownRemark?.frontmatter?.header_image as any
  );
  const headerImageSP = getImage(
    data.markdownRemark?.frontmatter?.header_image_sp as any
  );
  const logoImage = getImage(
    data.markdownRemark?.frontmatter?.logo_image as any
  );
  const additionalHeaderImage = getImage(
    data.markdownRemark?.frontmatter?.additional_header_image as any
  );

  const isBannerWidthOver100vh = useMediaQuery({ query: "(min-width: 100vh)" });
  const isBannerWidthOver410px = useMediaQuery({ query: "(min-width: 410px)" });

  return (
    <div className={vanilla.Parent}>
      {headerImage && (
        <GatsbyImage
          image={headerImage}
          alt="header image"
          className={vanilla_tenkoureirou.HeaderImage}
        />
      )}
      {isBannerWidthOver100vh && additionalHeaderImage && (
        <GatsbyImage
          image={additionalHeaderImage}
          alt="additional header image"
          className={vanilla_tenkoureirou.AdditionalHeaderImage}
        />
      )}
      {!isBannerWidthOver100vh && headerImageSP && (
        <GatsbyImage
          image={headerImageSP}
          alt="additional header image"
          className={vanilla_tenkoureirou.AdditionalHeaderImage}
        />
      )}
      {isBannerWidthOver100vh && isBannerWidthOver410px && logoImage && (
        <div className={vanilla_tenkoureirou.LogoImageWrapper}>
          <GatsbyImage
            image={logoImage}
            alt="logo image"
            className={vanilla_tenkoureirou.LogoImage}
          />
        </div>
      )}
      {!isBannerWidthOver100vh && isBannerWidthOver410px && logoImage && (
        <div className={vanilla_tenkoureirou.LogoImageWrapperSP}>
          <GatsbyImage
            image={logoImage}
            alt="logo image"
            className={vanilla_tenkoureirou.LogoImageSP}
          />
        </div>
      )}
      {!isBannerWidthOver100vh && !isBannerWidthOver410px && logoImage && (
        <div className={vanilla_tenkoureirou.LogoImageWrapperSP}>
          <GatsbyImage
            image={logoImage}
            alt="logo image"
            className={vanilla_tenkoureirou.LogoImageSPmini}
          />
        </div>
      )}
      <ScrollAnimation markdownRemark={data.markdownRemark} />
    </div>
  );
};

export const Aquilegia: React.FC<Queries.SpecialPageQuery> = (data) => {
  const headerImage = getImage(
    data.markdownRemark?.frontmatter?.header_image as any
  );
  const headerImageSP = getImage(
    data.markdownRemark?.frontmatter?.header_image_sp as any
  );
  const logoImage = getImage(
    data.markdownRemark?.frontmatter?.logo_image as any
  );
  const additionalHeaderImage = getImage(
    data.markdownRemark?.frontmatter?.additional_header_image as any
  );
  const additionalHeaderImage2 = getImage(
    data.markdownRemark?.frontmatter?.additional_header_image_2 as any
  );
  return (
    <div className={vanilla.Parent}>
      {headerImage && (
        <GatsbyImage
          image={headerImage}
          alt="header image"
          className={vanilla_aquilegia.HeaderImage}
        />
      )}
      {logoImage && (
        <div className={vanilla_aquilegia.LogoImageWrapper}>
          <GatsbyImage
            image={logoImage}
            alt="logo image"
            className={vanilla_aquilegia.LogoImage}
          />
        </div>
      )}
      {additionalHeaderImage && (
        <div className={vanilla_aquilegia.AdditionalHeaderImageWrapper}>
          <GatsbyImage
            image={additionalHeaderImage}
            alt="additional header image"
            className={vanilla_aquilegia.AdditionalHeaderImage}
          />
        </div>
      )}
      {additionalHeaderImage2 && (
        <div className={vanilla_aquilegia.AdditionalHeaderImage2Wrapper}>
          <GatsbyImage
            image={additionalHeaderImage2}
            alt="additional header image 2"
            className={vanilla_aquilegia.AdditionalHeaderImage}
          />
        </div>
      )}
    </div>
  );
};

// 関数を上から順番にリストに格納してexportする
