import * as React from "react";
import Overlay from "./components/special/overlay/overlay";
import * as vanilla from "./components/special/index.css";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import * as mytypes from "./components/special/types";

// markup
const IndexPage: React.FC<PageProps<Queries.SpecialPageQuery>> = ({ data }) => {
  const colors: mytypes.Colors = {
    overlay: {
      background: data.markdownRemark?.frontmatter?.overlay?.background ?? "",
      main: data.markdownRemark?.frontmatter?.overlay?.main ?? "",
      transition: {
        rect1:
          data.markdownRemark?.frontmatter?.overlay?.transition?.rect1 ?? "",
        rect2:
          data.markdownRemark?.frontmatter?.overlay?.transition?.rect2 ?? "",
      },
    },
    contentArea: {
      main: {
        backgroundColor:
          data.markdownRemark?.frontmatter?.contentArea?.main
            ?.backgroundColor ?? "",
      },
      outer: {
        backgroundColor:
          data.markdownRemark?.frontmatter?.contentArea?.outer
            ?.backgroundColor ?? "",
      },
    },
  };
  return (
    <>
      <Overlay
        colors={colors}
        subtitle={data.markdownRemark?.frontmatter?.subtitle ?? ""}
      />
      <div className={vanilla.Contents}>
        <Layout isIndex={true} currentPage="index">
          HOGE
        </Layout>
      </div>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query SpecialPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        overlay {
          background
          main
          transition {
            rect1
            rect2
          }
        }
        contentArea {
          main {
            backgroundColor
          }
          outer {
            backgroundColor
          }
        }
        subtitle
      }
    }
  }
`;
