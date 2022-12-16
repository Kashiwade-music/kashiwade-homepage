import * as React from "react";
import * as vanilla from "./h1.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface Props {
  children: React.ReactNode;
  data: Queries.SpecialPageQuery;
  localColor?: string;
}
export const H1: React.FC<Props> = ({ children, data, localColor = null }) => {
  return (
    <>
      {!localColor && (
        <h1
          className={vanilla.Headline}
          style={assignInlineVars({
            [vanilla.HeadlineBorderColor]:
              data.markdownRemark?.frontmatter?.theme?.accent ?? "",
          })}
        >
          <p
            className={vanilla.HeadlineP}
            style={assignInlineVars({
              [vanilla.HeadlineTextColor]:
                data.markdownRemark?.frontmatter?.theme?.accent ?? "",
            })}
          >
            {children}
          </p>
        </h1>
      )}
      {localColor && (
        <h1
          className={vanilla.Headline}
          style={assignInlineVars({
            [vanilla.HeadlineBorderColor]: localColor,
          })}
        >
          <p
            className={vanilla.HeadlineP}
            style={assignInlineVars({
              [vanilla.HeadlineTextColor]: localColor,
            })}
          >
            {children}
          </p>
        </h1>
      )}
    </>
  );
};
