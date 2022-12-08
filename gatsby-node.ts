import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const worksTemplate = path.resolve(`src/templates/works.tsx`);
  const specialTemplate = path.resolve(`src/templates/special.tsx`);

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

  const result2 = await graphql<Queries.LoadSpecialPagesQuery>(`
    query LoadSpecialPages {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/resources/special/**" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);
  result2.data?.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      // Path for this page — required
      path: `${node.frontmatter?.slug}`,
      component: specialTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
