import * as React from "react";
import Layout from "../components/layout";
import ContentLinkBoxes from "../components/contentsLinkBoxes";
import { graphql, PageProps } from "gatsby";
import { Meta } from "../components/layout/meta";

const WorksPage: React.FC<PageProps<Queries.WorksPageQuery>> = ({ data }) => {
  return (
    <Layout
      pageTitle={"Works"}
      currentPage={"works"}
      pageDescription={"ここ数年で製作した公開作品の一覧です"}
    >
      {<ContentLinkBoxes {...data} />}
    </Layout>
  );
};

export default WorksPage;

export const Head = () => (
  <Meta
    pageUrl={"/works"}
    pageTitle={"Works"}
    pageDescription={"ここ数年で製作した公開作品の一覧です"}
  />
);

export const query = graphql`
  query WorksPage {
    allMarkdownRemark(
      sort: { frontmatter: { slug: DESC } }
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
