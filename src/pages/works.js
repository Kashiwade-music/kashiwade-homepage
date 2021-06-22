// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Footer from "../components/footer";
import ContentLinkBoxArea from "../components/contentLinkBoxArea";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
// Step 2: Define your component
const IndexPage = ({ data }) => {
  return (
    <div>
      <NavBar currentPage="works" />
      <Header pageTitle="Works">
        制作した作品の一覧です。
        <br />
        大部分がYouTubeやSoundcloudに上がっています。
      </Header>
      <ContentLinkBoxArea edges={data.allMarkdownRemark.edges} />
      <Footer />
    </div>
  );
};
// Step 3: Export your component
export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark {
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
          }
        }
      }
    }
  }
`;
