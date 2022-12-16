import * as React from "react";
import * as vanilla from "./xfd.css";
import { H1 } from "../h1/h1";
import { motion } from "framer-motion";

interface Props {
  data: Queries.SpecialPageQuery;
}

export const XFD: React.FC<Props> = ({ data }) => {
  const soundcloudID = data.markdownRemark?.frontmatter
    ?.soundcloud as unknown as string;
  const youtubeID = data.markdownRemark?.frontmatter
    ?.youtube as unknown as string;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <H1 data={data}>XFD</H1>
        <iframe
          width="100%"
          height="166"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudID}&color=ff6600`}
          className={vanilla.Soundcloud}
        ></iframe>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <iframe
          width="100%"
          height="auto"
          src={`https://www.youtube.com/embed/${youtubeID}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={vanilla.Youtube}
        ></iframe>
      </motion.div>
    </>
  );
};
