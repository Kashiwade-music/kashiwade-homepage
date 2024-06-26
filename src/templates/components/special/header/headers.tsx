import * as vanilla_aquilegia from "./aquilegia.css";
import * as vanilla_chroniclesofluna from "./chroniclesofluna.css";
import * as vanilla_conquest from "./conquest.css";
import * as vanilla from "./headers.css";
import * as vanilla_rainyresolutions from "./rainyresolutions.css";
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

export const Conquest: React.FC<Queries.SpecialPageQuery> = (data) => {
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
  const additionalHeaderImage2 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_2 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage3 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_3 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage4 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_4 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage5 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_5 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage6 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_6 as unknown as IGatsbyImageData
  );

  const [mounted, setMounted] = React.useState(false);

  const [aspectRatio, setAspectRatio] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      setAspectRatio(aspectRatio);
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      // console.log("called");
      // console.log(`windowWidth: ${window.innerWidth}`);
      // console.log(`width: ${width}`);
      // console.log(`aspectRatio: ${aspectRatio}`);
    }
    setMounted(true);
    handleResize();

    // ウィンドウのサイズが変更された場合に呼び出すリスナーを登録
    window.addEventListener("resize", handleResize);

    // コンポーネントがアンマウントされた場合にリスナーを解除
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={vanilla.Parent}>
      {mounted && (
        <>
          {1.4 < aspectRatio && headerImage && (
            <>
              <GatsbyImage
                image={headerImage}
                alt="header image"
                style={{
                  position: "absolute",
                  height: "100vh",
                }}
              />
              <ScrollAnimation markdownRemark={data.markdownRemark} />
            </>
          )}
          {1.0 < aspectRatio &&
            aspectRatio <= 1.4 &&
            additionalHeaderImage2 && (
              <>
                <GatsbyImage
                  image={additionalHeaderImage2}
                  alt="header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                  }}
                />
                <ScrollAnimation markdownRemark={data.markdownRemark} />
              </>
            )}
          {aspectRatio <= 1.0 && headerImageSP && (
            <>
              <GatsbyImage
                image={headerImageSP}
                alt="header image"
                style={{
                  position: "absolute",
                  height: "100vh",
                }}
              />
              <ScrollAnimation markdownRemark={data.markdownRemark} />
            </>
          )}
          {0.8 < aspectRatio && (
            <div className={vanilla_conquest.LogoPositioner}>
              {additionalHeaderImage && (
                <GatsbyImage
                  image={additionalHeaderImage}
                  alt="additional header image"
                  style={{
                    width: `${windowHeight * (464 / 1500)}px`,
                    alignSelf: "flex-start",
                  }}
                />
              )}
            </div>
          )}
          {aspectRatio <= 0.8 && (
            <div className={vanilla_conquest.LogoPositioner}>
              {additionalHeaderImage && (
                <GatsbyImage
                  image={additionalHeaderImage}
                  alt="additional header image"
                  style={{
                    width: `${
                      windowHeight * (464 / 1500) * (aspectRatio + 0.15)
                    }px`,
                    alignSelf: "flex-end",
                  }}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export const RainyResolutions: React.FC<Queries.SpecialPageQuery> = (data) => {
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
  const additionalHeaderImage2 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_2 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage3 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_3 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage4 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_4 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage5 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_5 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage6 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_6 as unknown as IGatsbyImageData
  );

  const [mounted, setMounted] = React.useState(false);

  const [aspectRatio, setAspectRatio] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      setAspectRatio(aspectRatio);
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      // console.log("called");
      // console.log(`windowWidth: ${window.innerWidth}`);
      // console.log(`width: ${width}`);
      // console.log(`aspectRatio: ${aspectRatio}`);
    }
    setMounted(true);
    handleResize();

    // ウィンドウのサイズが変更された場合に呼び出すリスナーを登録
    window.addEventListener("resize", handleResize);

    // コンポーネントがアンマウントされた場合にリスナーを解除
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={vanilla.Parent}>
      {mounted && (
        <>
          {1.0 < aspectRatio && headerImage && (
            <GatsbyImage
              image={headerImage}
              alt="header image"
              style={{
                position: "absolute",
                height: "100vh",
              }}
            />
          )}
          {aspectRatio <= 1.0 && headerImageSP && (
            <>
              <GatsbyImage
                image={headerImageSP}
                alt="header image"
                style={{
                  position: "absolute",
                  height: "100vh",
                }}
              />
              <ScrollAnimation markdownRemark={data.markdownRemark} />
            </>
          )}
          {1.6 < aspectRatio && (
            <div className={vanilla_rainyresolutions.LogoPositioner}>
              {additionalHeaderImage && (
                <GatsbyImage
                  image={additionalHeaderImage}
                  alt="additional header image"
                  style={{
                    width: "40%",
                    alignSelf: "flex-start",
                    mixBlendMode: "overlay",
                  }}
                />
              )}
              {additionalHeaderImage2 && (
                <GatsbyImage
                  image={additionalHeaderImage2}
                  alt="additional header image"
                  style={{
                    width: `${40 * (6960 / 3453)}%`,
                    alignSelf: "flex-end",
                    mixBlendMode: "overlay",
                  }}
                />
              )}
            </div>
          )}
          {1.6 < aspectRatio && (
            <div className={vanilla_rainyresolutions.LogoPositioner}>
              {additionalHeaderImage && (
                <GatsbyImage
                  image={additionalHeaderImage}
                  alt="additional header image"
                  style={{
                    width: "40%",
                    alignSelf: "flex-start",
                    mixBlendMode: "overlay",
                  }}
                />
              )}
              {additionalHeaderImage2 && (
                <GatsbyImage
                  image={additionalHeaderImage2}
                  alt="additional header image"
                  style={{
                    width: `${40 * (6960 / 3453)}%`,
                    alignSelf: "flex-end",
                    mixBlendMode: "overlay",
                  }}
                />
              )}
            </div>
          )}

          {1.2 < aspectRatio && aspectRatio <= 1.6 && (
            <div className={vanilla_rainyresolutions.LogoPositioner}>
              {additionalHeaderImage && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage}
                    alt="additional header image"
                    style={{
                      width: "43%",
                      alignSelf: "flex-start",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
              {additionalHeaderImage2 && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage2}
                    alt="additional header image"
                    style={{
                      width: `${43 * (6960 / 3453)}%`,
                      alignSelf: "flex-end",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
            </div>
          )}

          {1.2 < aspectRatio && aspectRatio <= 1.6 && (
            <div className={vanilla_rainyresolutions.LogoPositioner}>
              {additionalHeaderImage && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage}
                    alt="additional header image"
                    style={{
                      width: "43%",
                      alignSelf: "flex-start",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
              {additionalHeaderImage2 && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage2}
                    alt="additional header image"
                    style={{
                      width: `${43 * (6960 / 3453)}%`,
                      alignSelf: "flex-end",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
            </div>
          )}

          {1.0 < aspectRatio && aspectRatio <= 1.2 && (
            <div className={vanilla_rainyresolutions.LogoPositioner}>
              {additionalHeaderImage && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage}
                    alt="additional header image"
                    style={{
                      width: "48%",
                      alignSelf: "flex-start",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
              {additionalHeaderImage2 && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage2}
                    alt="additional header image"
                    style={{
                      width: `${48 * (6960 / 3453)}%`,
                      alignSelf: "flex-end",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
            </div>
          )}

          {1.0 < aspectRatio && aspectRatio <= 1.2 && (
            <div className={vanilla_rainyresolutions.LogoPositioner}>
              {additionalHeaderImage && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage}
                    alt="additional header image"
                    style={{
                      width: "48%",
                      alignSelf: "flex-start",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
              {additionalHeaderImage2 && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage2}
                    alt="additional header image"
                    style={{
                      width: `${48 * (6960 / 3453)}%`,
                      alignSelf: "flex-end",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
            </div>
          )}

          {aspectRatio <= 1.0 && (
            <div className={vanilla_rainyresolutions.LogoPositionerSP}>
              {additionalHeaderImage4 && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage4}
                    alt="additional header image"
                    style={{
                      width: `${windowHeight * (1065 / 6960)}px`,
                      alignSelf: "flex-end",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
              {additionalHeaderImage3 && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage3}
                    alt="additional header image"
                    style={{
                      width: `${
                        windowHeight * (1065 / 6960) * (1326 / 1065)
                      }px`,
                      alignSelf: "flex-start",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
            </div>
          )}
          {aspectRatio <= 1.0 && (
            <div className={vanilla_rainyresolutions.LogoPositionerSP}>
              {additionalHeaderImage4 && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage4}
                    alt="additional header image"
                    style={{
                      width: `${windowHeight * (1065 / 6960)}px`,
                      alignSelf: "flex-end",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
              {additionalHeaderImage3 && (
                <>
                  <GatsbyImage
                    image={additionalHeaderImage3}
                    alt="additional header image"
                    style={{
                      width: `${
                        windowHeight * (1065 / 6960) * (1326 / 1065)
                      }px`,
                      alignSelf: "flex-start",
                      mixBlendMode: "overlay",
                    }}
                  />
                </>
              )}
            </div>
          )}
        </>
      )}
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
  const additionalHeaderImage = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image as unknown as IGatsbyImageData
  );
  const additionalHeaderImage2 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_2 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage3 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_3 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage4 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_4 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage5 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_5 as unknown as IGatsbyImageData
  );
  const additionalHeaderImage6 = getImage(
    data.markdownRemark?.frontmatter
      ?.additional_header_image_6 as unknown as IGatsbyImageData
  );

  const [mounted, setMounted] = React.useState(false);

  const [aspectRatio, setAspectRatio] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;
      setAspectRatio(aspectRatio);
      setWindowWidth(window.innerWidth);
      // console.log("called");
      // console.log(`windowWidth: ${window.innerWidth}`);
      // console.log(`width: ${width}`);
      // console.log(`aspectRatio: ${aspectRatio}`);
    }
    setMounted(true);
    handleResize();

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
          {1.6 < aspectRatio && (
            <>
              {additionalHeaderImage && (
                <GatsbyImage
                  image={additionalHeaderImage}
                  alt="additional header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                  }}
                />
              )}
              {logoImage && (
                <div className={vanilla_chroniclesofluna.LogoImageWrapper}>
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

          {1.4 < aspectRatio && aspectRatio <= 1.6 && (
            <>
              {additionalHeaderImage2 && (
                <GatsbyImage
                  image={additionalHeaderImage2}
                  alt="additional header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                  }}
                />
              )}
              {logoImage && (
                <div className={vanilla_chroniclesofluna.LogoImageWrapper}>
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

          {1.4 < aspectRatio && aspectRatio <= 1.6 && (
            <>
              {additionalHeaderImage2 && (
                <GatsbyImage
                  image={additionalHeaderImage2}
                  alt="additional header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                  }}
                />
              )}
              {logoImage && (
                <div className={vanilla_chroniclesofluna.LogoImageWrapper}>
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

          {1.2 < aspectRatio && aspectRatio <= 1.4 && (
            <>
              {additionalHeaderImage3 && (
                <GatsbyImage
                  image={additionalHeaderImage3}
                  alt="additional header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                  }}
                />
              )}
              {logoImage && (
                <div className={vanilla_chroniclesofluna.LogoImageWrapper}>
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

          {1.0 < aspectRatio && aspectRatio <= 1.2 && (
            <>
              {additionalHeaderImage4 && (
                <GatsbyImage
                  image={additionalHeaderImage4}
                  alt="additional header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                  }}
                />
              )}
              {logoImage && (
                <div className={vanilla_chroniclesofluna.LogoImageWrapper}>
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

          {0.65 < aspectRatio && aspectRatio <= 1.0 && (
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
                <div className={vanilla_chroniclesofluna.LogoImageWrapperSP}>
                  <GatsbyImage
                    image={logoImage}
                    alt="logo image"
                    style={{
                      position: "absolute",
                      width: "100%",
                    }}
                  />
                </div>
              )}
            </>
          )}

          {aspectRatio <= 0.65 && (
            <>
              {additionalHeaderImage5 && (
                <GatsbyImage
                  image={additionalHeaderImage5}
                  alt="additional header image"
                  style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                  }}
                />
              )}

              {additionalHeaderImage6 && (
                <div className={vanilla_chroniclesofluna.LogoImageWrapperSP}>
                  <GatsbyImage
                    image={additionalHeaderImage6}
                    alt="logo image"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: `${windowWidth * 0.57}px`,
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
