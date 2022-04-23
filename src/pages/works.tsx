import * as React from "react";
import * as vanilla from "../styles/index.css";
import Layout from "../components/layout";
import ContentLinkBoxes from "../components/contentsLinkBoxes";
import { graphql, Link, PageProps } from "gatsby";

const WorksPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  return (
    <Layout
      pageUrl={"/works"}
      pageTitle={"Works"}
      currentPage={"works"}
      pageDescription={"ここ数年で製作した公開作品の一覧です"}
    >
      {
        // @ts-ignore
        <ContentLinkBoxes data={data} />
      }
    </Layout>
  );
};

export default WorksPage;
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
