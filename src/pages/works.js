// Step 1: Import React
import * as React from "react";
import HeadMeta from "../components/headMeta";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Footer from "../components/footer";
import ContentArea from "../components/contentArea";
import ContentLinkBoxArea from "../components/contentLinkBoxArea";

import { graphql } from "gatsby";
// Step 2: Define your component
const IndexPage = ({ data }) => {
  const filteredEdges = data.allMarkdownRemark.edges.filter((edge) =>
    /\/works\//i.test(edge.node.frontmatter.slug)
  );
  return (
    <>
      <HeadMeta
        pageUrl={"/works"}
        pageTitle={"Works"}
        pageDescription={"ここ数年で制作した作品の一覧です。"}
      />
      <NavBar currentPage="works" />
      <Header pageTitle="Works">
        ここ数年で制作した作品の一覧です。
        <br />
        大部分がYouTubeやSoundcloudに上がっています。
      </Header>
      <ContentArea>
        <ContentLinkBoxArea edges={filteredEdges} />
      </ContentArea>
      <Footer />
    </>
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
