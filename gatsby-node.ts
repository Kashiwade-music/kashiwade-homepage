import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const worksTemplate = path.resolve(`src/templates/works.tsx`);

  const result = await graphql<Queries.LoadWorksPagesQueryQuery>(
    `
      query LoadWorksPagesQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/resources/works/**" } }
        ) {
          nodes {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    `
  );
  // Create blog post pages.
  result.data?.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      // Path for this page — required
      path: `${node.frontmatter?.slug}`,
      component: worksTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
