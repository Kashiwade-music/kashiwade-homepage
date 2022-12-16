import * as React from "react";
import * as vanilla from "./track.css";
import { MyParallax } from "../parallax/parallax";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useMediaQuery } from "react-responsive";
import { H1 } from "../h1/h1";
import { motion, AnimatePresence } from "framer-motion";

interface TrackItemProps {
  index: number;
  title: string;
  subinfo: string | undefined | null;
  data: Queries.SpecialPageQuery;
  width: number;
}
const TrackItem: React.FC<TrackItemProps> = ({
  index,
  title,
  subinfo,
  data,
  width,
}) => {
  return (
    <div className={vanilla.TrackItemWrapper}>
      <div
        className={vanilla.TrackItemGridParent}
        style={assignInlineVars({
          [vanilla.TrackItemGridParentWidth]: width + "px",
        })}
      >
        <div
          className={vanilla.TrackNumber}
          style={assignInlineVars({
            [vanilla.TrackNumberColor]: data.markdownRemark?.frontmatter?.theme
              ?.accent as string,
          })}
        >
          {index.toString().padStart(2, "0")}
        </div>
        <div
          className={vanilla.TrackTitle}
          style={assignInlineVars({
            [vanilla.TrackTitleColor]: data.markdownRemark?.frontmatter?.theme
              ?.baseSub1 as string,
          })}
        >
          {title}
        </div>
        {subinfo && (
          <div
            className={vanilla.TrackSubInfo}
            style={assignInlineVars({
              [vanilla.TrackSubInfoColor]: data.markdownRemark?.frontmatter
                ?.theme?.mainSub2 as string,
            })}
          >
            {subinfo}
          </div>
        )}
      </div>
    </div>
  );
};

interface TrackProps {
  data: Queries.SpecialPageQuery;
}

// Function that takes a string and font size and calculates the px width
const calculateWidth = (str: string, fontSize: number) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (context) {
    context.font = `${fontSize}px Arial`;
    return context.measureText(str).width;
  }
  return 0;
};

export const Track: React.FC<TrackProps> = ({ data }) => {
  const trackNumber = data.markdownRemark?.frontmatter?.track?.length as number;

  // find longest track title
  let longestTrackTitle = 0;
  data.markdownRemark?.frontmatter?.track?.forEach((track) => {
    let title = track?.title?.toString() as string;
    if (calculateWidth(title, 26) > longestTrackTitle) {
      longestTrackTitle = calculateWidth(title, 26);
    }
  });

  let longestTrackSubinfo = 0;
  data.markdownRemark?.frontmatter?.track?.forEach((track) => {
    let subinfo = track?.subinfo?.toString() as string;
    if (calculateWidth(subinfo, 15) > longestTrackSubinfo) {
      longestTrackSubinfo = calculateWidth(subinfo, 15);
    }
  });

  // width is max(longestTrackSubinfo*6.8, longestTrackTitle*25)
  const width =
    Math.floor(Math.max(longestTrackSubinfo, longestTrackTitle)) + 50;

  const maxWidth500px = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <>
      <MyParallax
        height={
          maxWidth500px
            ? `${75 + 65 * trackNumber + 30}px`
            : `${75 + 75 * trackNumber + 30}px`
        }
        node={data.markdownRemark?.frontmatter?.trackBackgroundImage as any}
        data={data}
      >
        <div className={vanilla.InnerWrapper}>
          <div className={vanilla.Inner}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <H1
                data={data}
                localColor={
                  data.markdownRemark?.frontmatter?.theme?.baseSub1 as string
                }
              >
                Track
              </H1>
            </motion.div>

            {data.markdownRemark?.frontmatter?.track?.map((track, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3 }}
              >
                <TrackItem
                  index={index + 1}
                  title={track?.title as string}
                  subinfo={track?.subinfo as string}
                  data={data}
                  width={width}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </MyParallax>
    </>
  );
};
