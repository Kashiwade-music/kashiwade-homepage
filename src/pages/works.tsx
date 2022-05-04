import * as React from "react";
import Layout from "../components/layout";
import ContentLinkBoxes from "../components/contentsLinkBoxes";
import { graphql, PageProps } from "gatsby";

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
    allMarkdownRemark(sort: { fields: frontmatter___slug, order: DESC }) {
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
