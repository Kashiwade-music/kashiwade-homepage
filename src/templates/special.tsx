import { Meta } from "../components/layout/meta";
import { Credit } from "./components/special/credit/credit";
import { Footer } from "./components/special/footer/footer";
import * as Headers from "./components/special/header/headers";
import * as vanilla from "./components/special/index.css";
import { Information } from "./components/special/information/information";
import { Layout } from "./components/special/layout";
import { News } from "./components/special/news/news";
import Overlay from "./components/special/overlay/overlay";
import { MyParallax } from "./components/special/parallax/parallax";
import { Track } from "./components/special/track/track";
import * as mytypes from "./components/special/types";
import { XFD } from "./components/special/xfd/xfd";
import { graphql, HeadProps, PageProps } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

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
    ? Headers[
        data.markdownRemark?.frontmatter
          ?.header_func_name as keyof typeof Headers
      ]
    : undefined;
  React.useEffect(() => {
    console.log("Special Page Loaded");
  }, []);
  return (
    <ParallaxProvider>
      <Overlay
        colors={colors}
        subtitle={data.markdownRemark?.frontmatter?.subtitle ?? ""}
      />
      <div className={vanilla.Contents}>
        {Header ? <Header markdownRemark={data.markdownRemark} /> : <></>}

        <MyParallax
          height="20vh"
          node={
            data.markdownRemark?.frontmatter
              ?.descriptionBackgroundImage as ImageDataLike
          }
          data={data}
        >
          <h1 className={vanilla.Poem}>
            {data.markdownRemark?.frontmatter?.poem ?? ""}
          </h1>
          {data.markdownRemark?.frontmatter?.description_array ? (
            data.markdownRemark.frontmatter.description_array.map(
              (description, index) => (
                <span className={vanilla.Description} key={index}>
                  {description}
                </span>
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

export const Head = (props: HeadProps<Queries.SpecialPageQuery>) => {
  return (
    <Meta
      pageUrl={props.data.markdownRemark?.frontmatter?.slug as string}
      pageTitle={props.data.markdownRemark?.frontmatter?.title as string}
      pageDescription={props.data.markdownRemark?.frontmatter?.description_array?.join(
        ""
      )}
      pageHero={
        props.data.markdownRemark?.frontmatter?.ogp?.childImageSharp
          ?.gatsbyImageData.images.fallback?.src as string
      }
    />
  );
};

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
        header_func_name
        header_image {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, quality: 100)
          }
        }
        header_image_sp {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, quality: 100)
          }
        }
        logo_image {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, quality: 100)
          }
        }
        additional_header_image {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, quality: 100)
          }
        }
        additional_header_image_2 {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, quality: 100)
          }
        }
        additional_header_image_3 {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, quality: 100)
          }
        }
        additional_header_image_4 {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, quality: 100)
          }
        }
        additional_header_image_5 {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, quality: 100)
          }
        }
        additional_header_image_6 {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, quality: 100)
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
