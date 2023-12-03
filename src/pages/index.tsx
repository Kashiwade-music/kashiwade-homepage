import headerTitleBottomLineSVG_LatestWorks from "../../resources/common/header-title-bottom-line2.svg";
import headerTitleBottomLineSVG_PickUp from "../../resources/common/header-title-bottom-line.svg";
import ContentLinkBoxes from "../components/contentsLinkBoxes";
import Layout from "../components/layout";
import { Meta } from "../components/layout/meta";
import { SpecialPageLinkBox } from "../components/specialPageLinkBox/specialPageLinkBox";
import { SpecialPageLinkBoxSP } from "../components/specialPageLinkBox/specialPageLinkBoxSP";
import * as vanilla from "../styles/index.css";
import { graphql, Link, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import MediaQuery from "react-responsive";

interface IndexContentAreaOuterProps {
  children: React.ReactNode;
}
const IndexContentAreaOuter: React.FC<IndexContentAreaOuterProps> = ({
  children,
}) => {
  return <div className={vanilla.Outer}>{children}</div>;
};

interface IndexContentAreaProps {
  children: React.ReactNode;
  needPadding?: boolean;
}
const IndexContentArea: React.FC<IndexContentAreaProps> = ({
  children,
  needPadding = true,
}) => {
  if (needPadding) {
    return <div className={vanilla.ContentAreaCSS}>{children}</div>;
  } else {
    return <div className={vanilla.ContentAreaCSSNonPadding}>{children}</div>;
  }
};

const IndexPage = ({ data }: PageProps<Queries.IndexQuery>) => {
  return (
    <Layout isIndex={true} currentPage="index">
      <IndexContentAreaOuter>
        <IndexContentArea needPadding={false}>
          <div className={vanilla.FirstHeaderPadding}>
            <div className={vanilla.Header}>
              <div className={vanilla.HeaderTitle}>Pick Up</div>
              <div className={vanilla.HeaderTitleBottomLine}>
                <img
                  src={headerTitleBottomLineSVG_PickUp}
                  width={350}
                  height={61.39}
                  alt=""
                />
              </div>
            </div>
          </div>
        </IndexContentArea>
        <IndexContentArea>
          <MediaQuery minWidth={501}>
            <SpecialPageLinkBox
              slug={data.IndexPageSpecial.nodes[0].frontmatter?.slug as string}
              description_array={
                data.IndexPageSpecial.nodes[0].frontmatter
                  ?.description_array as string[]
              }
              logo_image={
                data.IndexPageSpecial.nodes[0].frontmatter
                  ?.logo_image as unknown as IGatsbyImageData
              }
              descriptionBackgroundImage={
                data.IndexPageSpecial.nodes[0].frontmatter
                  ?.descriptionBackgroundImage as unknown as IGatsbyImageData
              }
              textColor={
                data.IndexPageSpecial.nodes[0].frontmatter?.parallax
                  ?.textColor as string
              }
              overlayColor={
                data.IndexPageSpecial.nodes[0].frontmatter?.parallax
                  ?.overlayColor as string
              }
              overlayOpacity={
                data.IndexPageSpecial.nodes[0].frontmatter?.parallax
                  ?.overlayOpacity as number
              }
              imageFilter={
                data.IndexPageSpecial.nodes[0].frontmatter?.parallax
                  ?.imageFilter as string
              }
              title={
                data.IndexPageSpecial.nodes[0].frontmatter?.title as string
              }
              logoMixBlendMode={
                data.IndexPageSpecial.nodes[0].frontmatter
                  ?.special_page_link_box_mix_blend_mode as string
              }
            />
          </MediaQuery>
          <MediaQuery maxWidth={500}>
            <SpecialPageLinkBoxSP
              slug={data.IndexPageSpecial.nodes[0].frontmatter?.slug as string}
              logo_image={
                data.IndexPageSpecial.nodes[0].frontmatter
                  ?.logo_image as unknown as IGatsbyImageData
              }
              descriptionBackgroundImage={
                data.IndexPageSpecial.nodes[0].frontmatter
                  ?.descriptionBackgroundImage as unknown as IGatsbyImageData
              }
              logoMixBlendMode={
                data.IndexPageSpecial.nodes[0].frontmatter
                  ?.special_page_link_box_mix_blend_mode as string
              }
            />
          </MediaQuery>
        </IndexContentArea>
        <IndexContentArea needPadding={false}>
          <div className={vanilla.Header}>
            <div className={vanilla.HeaderTitle}>Latest Works</div>
            <div className={vanilla.HeaderTitleBottomLine}>
              <img
                src={headerTitleBottomLineSVG_LatestWorks}
                width={350}
                height={61.39}
                alt=""
              />
            </div>
          </div>
        </IndexContentArea>
        <IndexContentArea>
          {<ContentLinkBoxes {...data} />}
          <div className={vanilla.MoreLinkBox}>
            <Link to="/works" className={vanilla.MoreLink}>
              show more works
            </Link>
          </div>
        </IndexContentArea>
      </IndexContentAreaOuter>
    </Layout>
  );
};
export default IndexPage;

export const Head = () => <Meta />;

export const query = graphql`
  query Index {
    IndexPageSpecial: allMarkdownRemark(
      sort: {
        order: [DESC, DESC]
        fields: [frontmatter___date, frontmatter___title]
      }
      limit: 1
      filter: { fileAbsolutePath: { glob: "**/resources/special/**" } }
    ) {
      nodes {
        frontmatter {
          slug
          description_array
          ogp {
            childImageSharp {
              gatsbyImageData
            }
          }
          logo_image {
            childImageSharp {
              gatsbyImageData(layout: FIXED, height: 150, placeholder: NONE)
            }
          }
          descriptionBackgroundImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          parallax {
            textColor
            overlayColor
            overlayOpacity
            imageFilter
          }
          title
          special_page_link_box_mix_blend_mode
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { slug: DESC } }
      limit: 4
      filter: { fileAbsolutePath: { glob: "**/resources/works/**" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            description
            slug
            title
            tag
            hero {
              childImageSharp {
                gatsbyImageData
                internal {
                  content
                  description
                  ignoreType
                  mediaType
                }
                parent {
                  id
                }
                id
                children {
                  id
                }
              }
            }
            price
            type
            description_long
            booth
          }
        }
      }
    }
  }
`;
