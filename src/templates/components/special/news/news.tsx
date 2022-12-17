import { H1 } from "../h1/h1";
import * as vanilla from "./news.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { motion } from "framer-motion";
import * as React from "react";

interface NewsFieldProps {
  index: number;
  news: Array<string>;
  data: Queries.SpecialPageQuery;
}
const NewsField: React.FC<NewsFieldProps> = ({ index, news, data }) => {
  if (index == 0) {
    return (
      <div className={vanilla.NewsFieldParentFirst} key={index}>
        <div
          className={vanilla.DateField}
          style={assignInlineVars({
            [vanilla.dateColor]: data.markdownRemark?.frontmatter?.theme
              ?.mainSub1 as string,
          })}
        >
          {news[0]}
        </div>
        <div
          className={vanilla.NewsField}
          style={assignInlineVars({
            [vanilla.newsColor]: data.markdownRemark?.frontmatter?.theme
              ?.main as string,
          })}
        >
          {news[1]}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={vanilla.NewsFieldParent}
        style={assignInlineVars({
          [vanilla.borderColor]: data.markdownRemark?.frontmatter?.theme
            ?.mainSub2 as string,
        })}
        key={index}
      >
        <div
          className={vanilla.DateField}
          style={assignInlineVars({
            [vanilla.dateColor]: data.markdownRemark?.frontmatter?.theme
              ?.mainSub1 as string,
          })}
        >
          {news[0]}
        </div>
        <div
          className={vanilla.NewsField}
          style={assignInlineVars({
            [vanilla.newsColor]: data.markdownRemark?.frontmatter?.theme
              ?.main as string,
          })}
        >
          {news[1]}
        </div>
      </div>
    );
  }
};

// get array and return news field
interface Props {
  data: Queries.SpecialPageQuery;
}
export const News: React.FC<Props> = ({ data }) => {
  const news = data.markdownRemark?.frontmatter?.news as Array<string>;
  const newsField = [];
  for (let i = 0; i < news.length; i += 2) {
    newsField.push(
      <NewsField data={data} index={i} news={[news[i], news[i + 1]]} key={i} />
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.3 }}
    >
      <H1 data={data}>News</H1>
      <div className={vanilla.News}>{newsField}</div>
    </motion.div>
  );
};
