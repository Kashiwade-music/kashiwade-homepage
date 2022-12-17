import Layout from "../components/layout";
import { Meta } from "../components/layout/meta";
import { SpecialPageLinkBox } from "../components/specialPageLinkBox/specialPageLinkBox";
import { SpecialPageLinkBoxSP } from "../components/specialPageLinkBox/specialPageLinkBoxSP";
import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import MediaQuery from "react-responsive";

const ProfilePage = ({ data }: PageProps<Queries.SpecialQuery>) => {
  return (
    <Layout
      pageTitle={"Special"}
      pageDescription={"特設サイト等のまとめです"}
      currentPage={"special"}
    >
      <MediaQuery minWidth={501}>
        {data.allMarkdownRemark.nodes.map((node, index) => (
          <>
            <SpecialPageLinkBox
              slug={node.frontmatter?.slug as string}
              description_array={
                node.frontmatter?.description_array as string[]
              }
              logo_image={
                node.frontmatter?.logo_image as unknown as IGatsbyImageData
              }
              descriptionBackgroundImage={
                node.frontmatter
                  ?.descriptionBackgroundImage as unknown as IGatsbyImageData
              }
              textColor={node.frontmatter?.parallax?.textColor as string}
              overlayColor={node.frontmatter?.parallax?.overlayColor as string}
              overlayOpacity={
                node.frontmatter?.parallax?.overlayOpacity as number
              }
              imageFilter={node.frontmatter?.parallax?.imageFilter as string}
              title={node.frontmatter?.title as string}
            />
            {index !== data.allMarkdownRemark.nodes.length - 1 && <br />}
          </>
        ))}
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        {data.allMarkdownRemark.nodes.map((node, index) => (
          <>
            <SpecialPageLinkBoxSP
              slug={node.frontmatter?.slug as string}
              logo_image={
                node.frontmatter?.logo_image as unknown as IGatsbyImageData
              }
              descriptionBackgroundImage={
                node.frontmatter
                  ?.descriptionBackgroundImage as unknown as IGatsbyImageData
              }
            />
            {index !== data.allMarkdownRemark.nodes.length - 1 && <br />}
          </>
        ))}
      </MediaQuery>
    </Layout>
  );
};

export default ProfilePage;

export const Head = () => (
  <Meta
    pageUrl={"/special"}
    pageTitle={"Special"}
    pageDescription={"特設サイト等のまとめです"}
  />
);

export const query = graphql`
  query Special {
    allMarkdownRemark(
      sort: { frontmatter: { slug: DESC } }
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
              gatsbyImageData(layout: FULL_WIDTH, quality: 100)
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
  }
`;
