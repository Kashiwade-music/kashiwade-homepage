import HeaderBackgroundLoop from "../../../resources/common/header-background-loop.svg";
import { keyframes, style } from "@vanilla-extract/css";

const bgiFade = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 0.15 },
});

const bgiAfter = keyframes({
  "0%": { height: "200%" },
  "100%": { height: "0" },
});

export const Header = style({
  height: "500px",
  position: "relative",
  zIndex: 0,
  overflow: "hidden",
  selectors: {
    "&:before": {
      content: '""',
      position: "absolute",
      width: "200%",
      height: "200%",
      top: "-50%",
      left: "-50%",
      zIndex: -1,
      transform: "rotate(-9deg)",
      backgroundImage: `url(${HeaderBackgroundLoop})`,
      backgroundSize: "500px 500px",
      backgroundRepeat: "repeat",
      opacity: 0,
      animation: `${bgiFade} 1.5s linear 1.7s 1 normal forwards`,
    },
    "&:after": {
      content: '""',
      position: "absolute",
      width: "200%",
      height: "200%",
      top: "-50%",
      left: "-50%",
      zIndex: 0,
      backgroundColor: "#faeeee",
      animation: `${bgiAfter} 1.5s ease 1s 1 normal forwards`,
    },
  },
});

export const Campus = style({
  height: "100%",
  position: "relative",
  backfaceVisibility: "hidden",
});

/*タイトル文字*/
const topMessageBoxBG = keyframes({
  "0%": { backgroundColor: "rgba(255, 255, 255, 0)" },
  "100%": { backgroundColor: "rgba(255, 255, 255, 0.7)" },
});

export const TopMessageBox = style({
  fontSize: "40px",
  fontFamily: '"Kanit"',
  fontWeight: 200,
  backgroundColor: "rgba(255, 255, 255, 0)",
  left: "50%",
  zIndex: 1,
  position: "absolute",
  top: "75%",
  transform: "translateY(-50%) translateX(-50%)",
  animation: `${topMessageBoxBG} 0.6s linear 1s 1 normal forwards`,
});

const passingBar = keyframes({
  "0%": { left: "0", width: "0" },
  "50%": { left: "0", width: "100%" },
  "51%": { left: "0", width: "100%" },
  "100%": { left: "100%", width: "0" },
});

export const PassingBar1 = style({
  position: "relative",
  display: "inline-block",
  selectors: {
    "&:before": {
      content: '""',
      display: "inline-block",
      width: "0",
      height: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      zIndex: 3,
      background: "#f4bfd6",
      animation: `${passingBar} 0.6s ease 0s 1 normal forwards`,
    },
  },
});

export const PassingBar2 = style({
  position: "relative",
  display: "inline-block",
  selectors: {
    "&:before": {
      content: '""',
      display: "inline-block",
      width: "0",
      height: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      zIndex: 2,
      background: "#94e39c",
      animation: `${passingBar} 0.75s ease 0.15s 1 normal forwards`,
    },
  },
});

export const PassingBar3 = style({
  position: "relative",
  display: "inline-block",
  selectors: {
    "&:before": {
      content: '""',
      display: "inline-block",
      width: "0",
      height: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      zIndex: 1,
      background: "#878ac4",
      animation: `${passingBar} 0.75s ease 0.3s 1 normal forwards`,
    },
  },
});

const passingTxt = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const PassingTxt = style({
  opacity: 0,
  padding: "0 30px",
  animation: `${passingTxt} 0s ease 0.5s 1 normal forwards`,
});

/*アイコン*/
const imgLoop = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const HeaderImage1 = style({
  zIndex: 1,
  left: "50%",
  transform: "translateX(-50%)",
  position: "absolute",
  backfaceVisibility: "hidden",
  overflow: "hidden",
  opacity: 0,
  animation: `${imgLoop} 1s linear 0.5s normal forwards`,
});

export const HeaderDescriptionColumn = style({
  height: "70px",
  borderTop: "solid 1px #ddd",
  borderBottom: "solid 1px #ddd",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
});

export const HeaderDescription = style({
  textAlign: "center",
  fontFamily: '"Noto Sans JP", sans-serif',
});
