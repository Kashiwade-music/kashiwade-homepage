// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Footer from "../components/footer";
import ContentArea from "../components/contentAria";
import ContentLinkBoxArea from "../components/contentLinkBoxArea";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
// Step 2: Define your component
const IndexPage = ({ data }) => {
  const filteredEdges = data.allMarkdownRemark.edges.filter((edge) =>
    /\/works\//i.test(edge.node.frontmatter.slug)
  );
  return (
    <div>
      <NavBar currentPage="works" />
      <Header pageTitle="Works">
        制作した作品の一覧です。
        <br />
        大部分がYouTubeやSoundcloudに上がっています。
      </Header>
      <ContentArea>
        <ContentLinkBoxArea edges={filteredEdges} />
      </ContentArea>
      <Footer />
    </div>
  );
};
// Step 3: Export your component
export default IndexPage;

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
