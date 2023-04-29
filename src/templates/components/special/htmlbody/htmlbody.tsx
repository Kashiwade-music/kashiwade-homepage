import { H1 } from "../h1/h1";
import * as vanilla from "./htmlbody.css";
import * as HTMLBodyStyle from "./htmlbody.module.css";
import { motion } from "framer-motion";
import * as React from "react";

const parseH1 = (html: string) => {
  // <h1>hoge</h1> -> <h1><p>hoge</p></h1>
  return html.replace(
    /<h1>(.+?)<\/h1>/g,
    '<h1 class="HTMLBody"><p>$1</p></h1>'
  );
};

interface Props {
  data: Queries.SpecialPageQuery;
}

export const HTMLBody: React.FC<Props> = ({ data }) => {
  const html = (data.markdownRemark?.html ?? "").replace(
    /<h1>(.+?)<\/h1>/g,
    "<h1><p>$1</p></h1>"
  );
  console.log(html);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={HTMLBodyStyle.HTMLBody}
        style={{
          ["--base__u5d7iy1r7GHyG3EmB" as any]:
            data.markdownRemark?.frontmatter?.theme?.base ?? "",
          ["--baseSub1__u5d7iy1r7GHyG3EmB" as any]:
            data.markdownRemark?.frontmatter?.theme?.baseSub1 ?? "",
          ["--main__u5d7iy1r7GHyG3EmB" as any]:
            data.markdownRemark?.frontmatter?.theme?.main ?? "",
          ["--mainSub1__u5d7iy1r7GHyG3EmB" as any]:
            data.markdownRemark?.frontmatter?.theme?.mainSub1 ?? "",
          ["--mainSub2__u5d7iy1r7GHyG3EmB" as any]:
            data.markdownRemark?.frontmatter?.theme?.mainSub2 ?? "",
          ["--accent__u5d7iy1r7GHyG3EmB" as any]:
            data.markdownRemark?.frontmatter?.theme?.accent ?? "",
        }}
        dangerouslySetInnerHTML={{ __html: html as string }}
      />
    </motion.div>
  );
};
