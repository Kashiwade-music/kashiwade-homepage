import * as React from "react";
import * as vanilla from "../styles/index.css";
import Layout from "../components/layout";
import ContentLinkBoxes from "../components/contentsLinkBoxes";
import { graphql, Link, PageProps } from "gatsby";
import headerTitleBottomLineSVG_PickUp from "../images/header-title-bottom-line.svg";
import headerTitleBottomLineSVG_LatestWorks from "../images/header-title-bottom-line2.svg";
import { SpecialPageLinkBox } from "../components/specialPageLinkBox";
import { Meta } from "../components/layout/meta";

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
          <SpecialPageLinkBox
            slug={data.IndexPageSpecial.nodes[0].frontmatter?.slug as string}
            description_array={
              data.IndexPageSpecial.nodes[0].frontmatter
                ?.description_array as string[]
            }
            logo_image={
              data.IndexPageSpecial.nodes[0].frontmatter?.logo_image as any
            }
            ogp={data.IndexPageSpecial.nodes[0].frontmatter?.ogp as any}
            descriptionBackgroundImage={
              data.IndexPageSpecial.nodes[0].frontmatter
                ?.descriptionBackgroundImage as any
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
            title={data.IndexPageSpecial.nodes[0].frontmatter?.title as string}
          />
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
      sort: { frontmatter: { slug: DESC } }
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
              gatsbyImageData(
                layout: FIXED
                height: 150
                quality: 50
                placeholder: NONE
              )
            }
          }
          descriptionBackgroundImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, quality: 50)
            }
          }
          parallax {
            textColor
            overlayColor
            overlayOpacity
            imageFilter
          }
          title
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
                gatsbyImageData(aspectRatio: 1)
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
