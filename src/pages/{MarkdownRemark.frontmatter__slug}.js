//gatsby-config.jsで指定したディレクトリ以下にある全てのページを作る
//worksディレクトリにのみ対応
//blogディレクトリへの対応は容易
import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/navBar";
import Header from "../components/header";
import Footer from "../components/footer";
import ContentArea from "../components/contentAria";
import WorkPostContent from "../components/workPostContent";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  if (/\/works\//i.test(frontmatter.slug)) {
    return (
      <div>
        <NavBar currentPage="works" />
        <Header pageTitle="Works" />

        <ContentArea>
          <WorkPostContent markdownRemark={markdownRemark} />
        </ContentArea>
        <Footer />
      </div>
    );
  } else {
    <div>
      <NavBar currentPage="works" />
      <Footer />
    </div>;
  }
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        tag
        hero {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        price
        type
        description_long
        booth
      }
    }
  }
`;
