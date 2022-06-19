//gatsby-config.jsで指定したディレクトリ以下にある全てのページを作る
//worksディレクトリにのみ対応
//blogディレクトリへの対応は容易
import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
import PageControlButtons from "../components/pageControlButtons";
import * as vanilla from "../styles/worksContentPage.css";

const WorkPostContent: React.FC<PageProps<Queries.PageQueryQuery>> = ({
  data,
}) => {
  const frontmatter = data.markdownRemark?.frontmatter;
  const html = data.markdownRemark?.html;
  // @ts-ignore
  const image = getImage(data.markdownRemark?.frontmatter?.hero);
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  //if window size is bigger than 600px, isDesktopOrMobile has "false"
  if (frontmatter?.type === "song") {
    return (
      <div>
        <div className={vanilla.WorkPostContainer}>
          <GatsbyImage image={image as IGatsbyImageData} alt="" />
          <div>
            <div className={vanilla.ItemName}>Title</div>
            <h1 className={vanilla.ItemSpec}>{frontmatter.title}</h1>
            <div className={vanilla.ItemName}>Release Date</div>
            <div className={vanilla.ItemSpec}>{frontmatter.date}</div>
            <div className={vanilla.ItemName}>Description</div>
            <div className={vanilla.ItemSpec}>
              {frontmatter.description_long}
            </div>
          </div>
        </div>
        <div
          className={vanilla.MdContents}
          dangerouslySetInnerHTML={{ __html: html as string }}
        />
      </div>
    );
  } else {
    return (
      <div>
        {isDesktopOrMobile && (
          <div>
            <div className={vanilla.WorkPostContainer}>
              <GatsbyImage image={image as IGatsbyImageData} alt="" />
              <div>
                <div className={vanilla.ItemNameMini}>Title</div>
                <h1 className={vanilla.ItemSpecMini}>{frontmatter?.title}</h1>
                <div className={vanilla.ItemNameMini}>Release Date</div>
                <div className={vanilla.ItemSpecMini}>{frontmatter?.date}</div>
                <div className={vanilla.BoothPrice}>
                  <div>
                    <div className={vanilla.ItemNameMini}>Booth</div>
                    <div className={vanilla.ItemSpecMini}>
                      {frontmatter?.booth}
                    </div>
                  </div>
                  <div>
                    <div className={vanilla.ItemNameMini}>Price</div>
                    <div className={vanilla.ItemSpecMini}>
                      {frontmatter?.price}
                    </div>
                  </div>
                </div>
                <div className={vanilla.ItemNameMini}>Description</div>
                <div className={vanilla.ItemSpecMini}>
                  {frontmatter?.description_long}
                </div>
              </div>
            </div>
          </div>
        )}
        {!isDesktopOrMobile && (
          <div>
            <div className={vanilla.WorkPostContainer}>
              <GatsbyImage image={image as IGatsbyImageData} alt="" />
              <div>
                <div className={vanilla.ItemName}>Title</div>
                <h1 className={vanilla.ItemSpec}>{frontmatter?.title}</h1>
                <div className={vanilla.ItemName}>Release Date</div>
                <div className={vanilla.ItemSpec}>{frontmatter?.date}</div>

                <div className={vanilla.ItemName}>Booth</div>
                <div className={vanilla.ItemSpec}>{frontmatter?.booth}</div>

                <div className={vanilla.ItemName}>Price</div>
                <div className={vanilla.ItemSpec}>{frontmatter?.price}</div>

                <div className={vanilla.ItemName}>Description</div>
                <div className={vanilla.ItemSpec}>
                  {frontmatter?.description_long}
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={vanilla.MdContents}
          dangerouslySetInnerHTML={{ __html: html as string }}
        />
      </div>
    );
  }
};

const Template: React.FC<PageProps<Queries.PageQueryQuery>> = ({ data }) => {
  const pageControlObj = data.allMarkdownRemark.edges.find(
    (element) => element.node.id == data.markdownRemark?.id
  );
  return (
    <Layout
      currentPage="works"
      pageUrl={data.markdownRemark?.frontmatter?.slug ?? undefined}
      pageTitle={"Works"}
      pageDescription={
        data.markdownRemark?.frontmatter?.description ?? undefined
      }
      pageHero={
        data.markdownRemark?.frontmatter?.hero?.childImageSharp?.gatsbyImageData
          ?.images.fallback?.src
      }
    >
      {
        // @ts-ignore
        <WorkPostContent data={data} />
      }
      <PageControlButtons
        previousLink={pageControlObj?.previous?.frontmatter?.slug ?? undefined}
        previousTitle={
          pageControlObj?.previous?.frontmatter?.title ?? undefined
        }
        nextLink={pageControlObj?.next?.frontmatter?.slug ?? undefined}
        nextTitle={pageControlObj?.next?.frontmatter?.title ?? undefined}
      />
    </Layout>
  );
};

export default Template;

export const pageQuery = graphql`
  query PageQuery($id: String) {
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
            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1)
          }
        }
        price
        type
        description_long
        booth
      }
      id
    }
    allMarkdownRemark(
      sort: { fields: frontmatter___slug, order: ASC }
      filter: { fileAbsolutePath: { glob: "**/resources/works/**" } }
    ) {
      edges {
        next {
          frontmatter {
            slug
            title
          }
        }
        node {
          id
        }
        previous {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
