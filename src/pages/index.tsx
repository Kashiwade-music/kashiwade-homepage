import * as React from "react";
import * as vanilla from "../styles/index.css";
import Layout from "../components/layout";
//import ContentLinkBoxes from "../components/contentsLinkBoxes";
import { graphql, Link, PageProps } from "gatsby";
import headerTitleBottomLineSVG from "../images/header-title-bottom-line2.svg";

// markup
const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  const filteredEdges = data.allMarkdownRemark.edges.filter((edge) => {
    const str =
      edge.node.frontmatter?.slug != null ? edge.node.frontmatter.slug : "";
    return /\/works\//i.test(str);
  });

  return (
    <Layout isIndex={true} currentPage="index">
      <div className={vanilla.Header}>
        <div className={vanilla.HeaderTitle}>Latest Works</div>
        <div className={vanilla.HeaderTitleBottomLine}>
          <img src={headerTitleBottomLineSVG} width={350} height={61.39} />
        </div>{" "}
      </div>
      <div className={vanilla.MoreLinkBox}>
        <Link to="/works" className={vanilla.MoreLink}>
          more
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
export const query = graphql`
  query IndexPage {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 4
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
