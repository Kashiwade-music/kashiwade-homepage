import * as React from "react";
import Overlay from "./components/special/overlay/overlay";
import * as vanilla from "./components/special/index.css";
import { graphql, PageProps } from "gatsby";
import * as Headers from "./components/special/header/headers";
import * as mytypes from "./components/special/types";
import { MyParallax } from "./components/special/parallax/parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { Layout } from "./components/special/layout";
import { News } from "./components/special/news/news";
import { XFD } from "./components/special/xfd/xfd";
import { Information } from "./components/special/information/information";
import { Track } from "./components/special/track/track";
import { Credit } from "./components/special/credit/credit";
import { Footer } from "./components/special/footer/footer";
import Meta from "../components/layout/meta";

// markup
const IndexPage: React.FC<PageProps<Queries.SpecialPageQuery>> = ({ data }) => {
  const colors: mytypes.Colors = {
    overlay: {
      background: data.markdownRemark?.frontmatter?.overlay?.background ?? "",
      lineColor: data.markdownRemark?.frontmatter?.overlay?.lineColor ?? "",
      logoColor: data.markdownRemark?.frontmatter?.overlay?.logoColor ?? "",
      transition: {
        rect1:
          data.markdownRemark?.frontmatter?.overlay?.transition?.rect1 ?? "",
        rect2:
          data.markdownRemark?.frontmatter?.overlay?.transition?.rect2 ?? "",
      },
    },
  };

  const Header = data.markdownRemark?.frontmatter?.title
    ? Headers[data.markdownRemark?.frontmatter?.title as keyof typeof Headers]
    : undefined;
  return (
    <ParallaxProvider>
      <Meta
        pageUrl={data.markdownRemark?.frontmatter?.slug as string}
        pageTitle={data.markdownRemark?.frontmatter?.title as string}
        pageDescription={data.markdownRemark?.frontmatter?.description_array?.join(
          ""
        )}
        pageHero={
          data.markdownRemark?.frontmatter?.ogp?.childImageSharp
            ?.gatsbyImageData.images.fallback?.src as string
        }
      />
      <Overlay
        colors={colors}
        subtitle={data.markdownRemark?.frontmatter?.subtitle ?? ""}
      />
      <div className={vanilla.Contents}>
        {Header ? <Header markdownRemark={data.markdownRemark} /> : <></>}
        <MyParallax
          height="20vh"
          node={
            data.markdownRemark?.frontmatter?.descriptionBackgroundImage as any
          }
          data={data}
        >
          <h1 className={vanilla.Poem}>
            {data.markdownRemark?.frontmatter?.poem ?? ""}
          </h1>
          {data.markdownRemark?.frontmatter?.description_array ? (
            data.markdownRemark.frontmatter.description_array.map(
              (description) => (
                <span className={vanilla.Description}>{description}</span>
              )
            )
          ) : (
            <></>
          )}
        </MyParallax>
        <Layout data={data}>
          <News data={data} />
          <XFD data={data} />
          <Information data={data} />
        </Layout>
        <Track data={data} />
        <Layout data={data}>
          <Credit data={data} />
          <Footer data={data} />
        </Layout>
      </div>
    </ParallaxProvider>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query SpecialPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
        ogp {
          childImageSharp {
            gatsbyImageData
          }
        }
        parallax {
          textColor
          overlayColor
          overlayOpacity
          imageFilter
        }
        overlay {
          background
          logoColor
          lineColor
          transition {
            rect1
            rect2
          }
        }
        header {
          scrollMainColor
          scrollBackgroundColor
        }
        subtitle
        header_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        header_image_sp {
          childImageSharp {
            gatsbyImageData
          }
        }
        logo_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        additional_header_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        additional_header_image_2 {
          childImageSharp {
            gatsbyImageData
          }
        }
        descriptionBackgroundImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        poem
        description_array
        news
        mainBackgroundImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        theme {
          accent
          base
          baseSub1
          main
          mainSub1
          mainSub2
        }
        soundcloud
        youtube
        jacketImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        infomation {
          title
          specification
          releaseDate
          price
          circle
          booth
        }
        shop {
          download
          cd
          streaming
        }
        trackBackgroundImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        track {
          title
          subinfo
        }
        credit {
          other {
            name
            role
            website
          }
          produce {
            name
            twitter
            website
          }
        }
      }
    }
  }
`;
