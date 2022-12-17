import * as vanilla from "./footer.css";
import { IoHomeSharp } from "@react-icons/all-files/io5/IoHomeSharp";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { SlArrowRight } from "react-icons/sl";

interface Props {
  data: Queries.SpecialPageQuery;
}

export const Footer: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div
        className={vanilla.SitemapBarParent}
        style={assignInlineVars({
          [vanilla.BorderColor]: data.markdownRemark?.frontmatter?.theme
            ?.accent as string,
        })}
      >
        <div className={vanilla.SitemapBarLayoutWrapper}>
          <div className={vanilla.SitemapBarLayout}>
            <Link to={"/"} title={""} className={vanilla.HomeIcon}>
              <IoHomeSharp
                style={{
                  height: "23px",
                  width: "23px",
                  color: data.markdownRemark?.frontmatter?.theme
                    ?.main as string,
                }}
              />
            </Link>
            <SlArrowRight
              style={{
                height: "15px",
                width: "15px",
                padding: "0 10px",
                color: data.markdownRemark?.frontmatter?.theme
                  ?.mainSub1 as string,
              }}
            />
            <Link
              to={"/special"}
              title={""}
              className={vanilla.Link}
              style={assignInlineVars({
                [vanilla.LinkTextColor]: data.markdownRemark?.frontmatter?.theme
                  ?.main as string,
              })}
            >
              Special
            </Link>
            <SlArrowRight
              style={{
                height: "15px",
                width: "15px",
                padding: "0 10px",
                color: data.markdownRemark?.frontmatter?.theme
                  ?.mainSub1 as string,
              }}
            />
            <Link
              to={"#"}
              title={""}
              className={vanilla.Link}
              style={assignInlineVars({
                [vanilla.LinkTextColor]: data.markdownRemark?.frontmatter?.theme
                  ?.main as string,
              })}
            >
              {data.markdownRemark?.frontmatter?.title as string}
            </Link>
          </div>
        </div>
      </div>
      <div className={vanilla.LogoWrapper}>
        <Link to={"/"} title={""}>
          <StaticImage
            src={"../../../../../resources/common/kashiwade_logo_2022.png"}
            alt={""}
            width={200}
          />
        </Link>
      </div>
    </>
  );
};
