import { H1 } from "../h1/h1";
import { MyParallax } from "../parallax/parallax";
import * as vanilla from "./track.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { motion } from "framer-motion";
import { ImageDataLike } from "gatsby-plugin-image";
import * as React from "react";
import { useMediaQuery } from "react-responsive";

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
              ?.track_num as string,
          })}
        >
          {index.toString().padStart(2, "0")}
        </div>
        <div
          className={vanilla.TrackTitle}
          style={assignInlineVars({
            [vanilla.TrackTitleColor]: data.markdownRemark?.frontmatter?.theme
              ?.track_name as string,
          })}
        >
          {title}
        </div>
        {subinfo && (
          <div
            className={vanilla.TrackSubInfo}
            style={assignInlineVars({
              [vanilla.TrackSubInfoColor]: data.markdownRemark?.frontmatter
                ?.theme?.track_subinfo as string,
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
// SSR is not supported, so we can't use document.createElement("canvas")
// to calculate the width of a string
const calculateWidth = (str: string, fontSize: number) => {
  let width = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      // string is alphabetical
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || // uppercase
      (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) // lowercase
    ) {
      width += fontSize * 0.465;
    } else if (
      // string is numerical
      str.charCodeAt(i) >= 48 &&
      str.charCodeAt(i) <= 57
    ) {
      width += fontSize * 0.4;
    } else {
      width += fontSize * 0.8;
    }
  }
  return width;
};

export const Track: React.FC<TrackProps> = ({ data }) => {
  const trackNumber = data.markdownRemark?.frontmatter?.track?.length as number;

  // find longest track title
  let longestTrackTitle = 0;
  data.markdownRemark?.frontmatter?.track?.forEach((track) => {
    const title = track?.title?.toString() as string;
    if (calculateWidth(title, 26) > longestTrackTitle) {
      longestTrackTitle = calculateWidth(title, 26);
    }
  });

  let longestTrackSubinfo = 0;
  data.markdownRemark?.frontmatter?.track?.forEach((track) => {
    const subinfo = track?.subinfo?.toString() as string;
    if (subinfo) {
      if (calculateWidth(subinfo, 15) > longestTrackSubinfo) {
        longestTrackSubinfo = calculateWidth(subinfo, 15);
      }
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
        node={
          data.markdownRemark?.frontmatter
            ?.trackBackgroundImage as ImageDataLike
        }
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
                  data.markdownRemark?.frontmatter?.theme
                    ?.track_heading as string
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
                key={
                  ((track?.title?.toString() as string) +
                    track?.subinfo?.toString()) as string
                }
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
