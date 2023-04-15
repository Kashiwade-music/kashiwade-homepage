import * as vanilla_aquilegia from "./aquilegia.css";
import * as vanilla from "./headers.css";
import * as vanilla_tenkoureirou from "./tenkoureirou.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import { useEffect, useState } from "react";
import * as React from "react";
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

export const ChroniclesOfLuna: React.FC<Queries.SpecialPageQuery> = (data) => {
  const headerImage = getImage(
    data.markdownRemark?.frontmatter
      ?.header_image as unknown as IGatsbyImageData
  );
  const headerImageSP = getImage(
    data.markdownRemark?.frontmatter
      ?.header_image_sp as unknown as IGatsbyImageData
  );
  const logoImage = getImage(
    data.markdownRemark?.frontmatter?.logo_image as unknown as IGatsbyImageData
  );
  const additionalHeaderImage =
    "../../../../../resources/special/20230430-chronicles-of-luna-header.png";
  // getImage(
  //   data.markdownRemark?.frontmatter
  //     ?.additional_header_image as unknown as IGatsbyImageData
  // );

  const isWidthWiderThan100vh = useMediaQuery({
    query: "(min-width: 100vh)",
  });
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const [aspectRatio, setAspectRatio] = useState(0);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      setAspectRatio(aspectRatio);
    }

    // ウィンドウのサイズが変更された場合に呼び出すリスナーを登録
    window.addEventListener("resize", handleResize);

    // コンポーネントがアンマウントされた場合にリスナーを解除
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={vanilla.Parent}>
      {headerImage && (
        <GatsbyImage
          image={headerImage}
          alt="header image"
          style={{
            position: "absolute",
            height: "100vh",
          }}
        />
      )}
      {mounted && (
        <>
          {isWidthWiderThan100vh && (
            <>
              {
                //additionalHeaderImage && (
                // <GatsbyImage
                //   image={additionalHeaderImage}
                //   alt="additional header image"
                //   style={{
                //     position: "absolute",
                //     height: "100vh",
                //   }}
                // />
                //)
                additionalHeaderImage && (
                  <StaticImage
                    src={additionalHeaderImage}
                    alt="additional header image"
                    quality={100}
                    layout="constrained"
                    style={{
                      position: "absolute",
                      height: "100vh",
                    }}
                  />
                )
              }
              {logoImage && (
                <div className={vanilla_tenkoureirou.LogoImageWrapper}>
                  <GatsbyImage
                    image={logoImage}
                    alt="logo image"
                    style={{
                      position: "absolute",
                      // height: "45vh",
                      minHeight: "232px",
                      minWidth: "630px",
                      width: "45%",
                      marginLeft: "calc(4vw + 10px)",
                    }}
                  />
                </div>
              )}
            </>
          )}

          {!isWidthWiderThan100vh && (
            <>
              {headerImageSP && (
                <GatsbyImage
                  image={headerImageSP}
                  alt="additional header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                  }}
                />
              )}

              {logoImage && (
                <div className={vanilla_tenkoureirou.LogoImageWrapperSP}>
                  <GatsbyImage
                    image={logoImage}
                    alt="logo image"
                    style={{
                      position: "absolute",
                      maxWidth: "40vh",
                      width: "100%",
                    }}
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
      <ScrollAnimation markdownRemark={data.markdownRemark} />
    </div>
  );
};

export const 天光玲瓏: React.FC<Queries.SpecialPageQuery> = (data) => {
  const headerImage = getImage(
    data.markdownRemark?.frontmatter
      ?.header_image as unknown as IGatsbyImageData
  );
  const headerImageSP = getImage(
    data.markdownRemark?.frontmatter
      ?.header_image_sp as unknown as IGatsbyImageData
  );
  const logoImage = getImage(
    data.markdownRemark?.frontmatter?.logo_image as unknown as IGatsbyImageData
  );
  const additionalHeaderImage = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image as unknown as IGatsbyImageData
  );

  const isWidthWiderThan100vh = useMediaQuery({
    query: "(min-width: 100vh)",
  });
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className={vanilla.Parent}>
      {headerImage && (
        <GatsbyImage
          image={headerImage}
          alt="header image"
          style={{
            position: "absolute",
            height: "100vh",
          }}
        />
      )}
      {mounted && (
        <>
          {isWidthWiderThan100vh && (
            <>
              {additionalHeaderImage && (
                <GatsbyImage
                  image={additionalHeaderImage}
                  alt="additional header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                  }}
                />
              )}
              {logoImage && (
                <div className={vanilla_tenkoureirou.LogoImageWrapper}>
                  <GatsbyImage
                    image={logoImage}
                    alt="logo image"
                    style={{
                      position: "absolute",
                      height: "45vh",
                      width: "45vh",
                      marginLeft: "calc(5vw + 10px)",
                    }}
                  />
                </div>
              )}
            </>
          )}

          {!isWidthWiderThan100vh && (
            <>
              {headerImageSP && (
                <GatsbyImage
                  image={headerImageSP}
                  alt="additional header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                  }}
                />
              )}

              {logoImage && (
                <div className={vanilla_tenkoureirou.LogoImageWrapperSP}>
                  <GatsbyImage
                    image={logoImage}
                    alt="logo image"
                    style={{
                      position: "absolute",
                      maxWidth: "40vh",
                      width: "100%",
                    }}
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
      <ScrollAnimation markdownRemark={data.markdownRemark} />
    </div>
  );
};

export const Aquilegia: React.FC<Queries.SpecialPageQuery> = (data) => {
  const headerImage = getImage(
    data.markdownRemark?.frontmatter
      ?.header_image as unknown as IGatsbyImageData
  );
  const logoImage = getImage(
    data.markdownRemark?.frontmatter?.logo_image as unknown as IGatsbyImageData
  );
  const additionalHeaderImage = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image as unknown as IGatsbyImageData
  );
  const additionalHeaderImage2 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_2 as unknown as IGatsbyImageData
  );
  return (
    <div className={vanilla.Parent}>
      {headerImage && (
        <GatsbyImage
          image={headerImage}
          alt="header image"
          style={{ position: "absolute", height: "100vh" }}
        />
      )}
      {logoImage && (
        <div className={vanilla_aquilegia.LogoImageWrapper}>
          <GatsbyImage
            image={logoImage}
            alt="logo image"
            className={vanilla_aquilegia.LogoImage}
            style={{ position: "absolute" }}
          />
        </div>
      )}
      {additionalHeaderImage && (
        <div className={vanilla_aquilegia.AdditionalHeaderImageWrapper}>
          <GatsbyImage
            image={additionalHeaderImage}
            alt="additional header image"
            className={vanilla_aquilegia.AdditionalHeaderImage}
            style={{ position: "absolute" }}
          />
        </div>
      )}
      {additionalHeaderImage2 && (
        <div className={vanilla_aquilegia.AdditionalHeaderImage2Wrapper}>
          <GatsbyImage
            image={additionalHeaderImage2}
            alt="additional header image 2"
            className={vanilla_aquilegia.AdditionalHeaderImage}
            style={{ position: "absolute" }}
          />
        </div>
      )}
    </div>
  );
};

// 関数を上から順番にリストに格納してexportする
