// Step 1: Import React
import * as React from "react";
import HeadMeta from "../components/headMeta";
import NavBar from "../components/navBar";
import TopHeader from "../components/topHeader";
import Footer from "../components/footer";
import ContentArea from "../components/contentArea";
import ContentLinkBoxArea from "../components/contentLinkBoxArea";
import { graphql, Link } from "gatsby";
import {
  header,
  headerTitle,
  headerTitleBottomLine,
  moreLink,
  moreLinkBox,
} from "../styles/index.module.css";
import headerTitleBottomLineSVG from "../images/header-title-bottom-line2.svg";

// Step 2: Define your component
const IndexPage = ({ data }) => {
  const filteredEdges = data.allMarkdownRemark.edges.filter((edge) =>
    /\/works\//i.test(edge.node.frontmatter.slug)
  );
  return (
    <>
      <HeadMeta />
      <NavBar currentPage="index" />
      <TopHeader />

      <ContentArea>
        <div className={header}>
          <div className={headerTitle}>Latest Works</div>
          <div className={headerTitleBottomLine}>
            <img src={headerTitleBottomLineSVG} width={350} height={61.39} />
          </div>{" "}
        </div>
        <ContentLinkBoxArea edges={filteredEdges} centering={true} />
        <div className={moreLinkBox}>
          <Link to="/works" className={moreLink}>
            more
          </Link>
        </div>
      </ContentArea>
      <Footer />
    </>
  );
};
// Step 3: Export your component
export default IndexPage;
export const query = graphql`
  query {
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
