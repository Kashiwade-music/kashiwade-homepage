import * as React from "react";
import * as vanilla from "./credit.css";
import { H1 } from "../h1/h1";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  data: Queries.SpecialPageQuery;
}

interface OtherProps {
  role: string;
  name: string;
  webSiteNameArray: Array<string>;
  webSiteUrlArray: Array<string>;
}

export const Credit: React.FC<Props> = ({ data }) => {
  const Others: Array<OtherProps> = [];
  if (data.markdownRemark?.frontmatter?.credit?.other) {
    for (
      let idx = 0;
      idx < data.markdownRemark?.frontmatter?.credit?.other?.length;
      idx++
    ) {
      let websiteArray = data.markdownRemark?.frontmatter?.credit?.other[idx]
        ?.website as Array<string>;
      Others.push({
        role: data.markdownRemark?.frontmatter?.credit?.other[idx]
          ?.role as string,
        name: data.markdownRemark?.frontmatter?.credit?.other[idx]
          ?.name as string,
        webSiteNameArray: websiteArray
          .filter((_, i) => i % 2 === 0)
          .map((x) => (x as string).toString()),
        webSiteUrlArray: websiteArray
          .filter((_, i) => i % 2 === 1)
          .map((x) => (x as string).toString()),
      });
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <H1 data={data}>Credit</H1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <div className={vanilla.CreditCenterFlexBox}>
          <div className={vanilla.CreditGridBox}>
            <div
              className={vanilla.CreditGridRole}
              style={assignInlineVars({
                [vanilla.RoleColor]: data.markdownRemark?.frontmatter?.theme
                  ?.main as string,
              })}
            >
              Music Composed by
            </div>
            <div
              className={vanilla.CreditGridName}
              style={assignInlineVars({
                [vanilla.NameColor]: data.markdownRemark?.frontmatter?.theme
                  ?.main as string,
              })}
            >
              Kashiwade
            </div>
            <div className={vanilla.CreditGridAccount}>
              <a
                href={
                  data.markdownRemark?.frontmatter?.credit?.produce
                    ?.website as string
                }
                target="_blank"
                rel="noopener noreferrer"
                className={vanilla.A}
                style={assignInlineVars({
                  [vanilla.AccountColor]: data.markdownRemark?.frontmatter
                    ?.theme?.mainSub1 as string,
                })}
              >
                Official Website
              </a>
              /
              <a
                href={
                  data.markdownRemark?.frontmatter?.credit?.produce
                    ?.twitter as string
                }
                target="_blank"
                rel="noopener noreferrer"
                className={vanilla.A}
                style={assignInlineVars({
                  [vanilla.AccountColor]: data.markdownRemark?.frontmatter
                    ?.theme?.mainSub1 as string,
                })}
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <div className={vanilla.CreditOthersFlexBox}>
          {Others.map((other, idx) => (
            <div className={vanilla.CreditOtherGridBox}>
              <div
                className={vanilla.CreditGridRole}
                style={assignInlineVars({
                  [vanilla.RoleColor]: data.markdownRemark?.frontmatter?.theme
                    ?.main as string,
                })}
              >
                {other.role}
              </div>
              <div
                className={vanilla.CreditGridNameOthers}
                style={assignInlineVars({
                  [vanilla.NameColor]: data.markdownRemark?.frontmatter?.theme
                    ?.main as string,
                })}
              >
                {other.name}
              </div>
              <div className={vanilla.CreditGridAccount}>
                {other.webSiteNameArray.map((webSiteName, idx) => (
                  <>
                    <a
                      href={other.webSiteUrlArray[idx] as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={vanilla.A}
                      style={assignInlineVars({
                        [vanilla.AccountColor]: data.markdownRemark?.frontmatter
                          ?.theme?.mainSub1 as string,
                      })}
                    >
                      {webSiteName}
                    </a>
                    {idx !== other.webSiteNameArray.length - 1 ? "/" : ""}
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};
