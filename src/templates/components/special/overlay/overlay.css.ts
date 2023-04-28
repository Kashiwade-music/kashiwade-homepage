import { keyframes, style, createVar } from "@vanilla-extract/css";

export const overlay_background = createVar();
export const overlay_logoColor = createVar();
export const overlay_lineColor = createVar();
export const overlay_transition_rect1 = createVar();
export const overlay_transition_rect2 = createVar();

const BlurTransition = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 1 },
  "99%": { opacity: 0 },
  "100%": { zIndex: -1, opacity: 0 },
});
export const Campus = style({
  position: "fixed",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  background: overlay_background,
  zIndex: 100,
  animation: `${BlurTransition} 2s cubic-bezier(0.55, 0.06, 0.68, 0.19) 2.8s 1 normal forwards`,
});

export const FullOverlay1 = style({
  position: "fixed",
  left: "0",
  top: "0",
  zIndex: 200,
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
});

const ObiAnimation = keyframes({
  "0%": { height: "0%" },
  "100%": { height: "100%" },
});
export const LeftObi = style({
  height: "0%",
  width: "100px",
  border: "solid",
  borderWidth: "0px 2px 0px 0px",
  borderColor: overlay_lineColor,
  animation: `${ObiAnimation} 0.7s cubic-bezier(0.4, 0.01, 0, 1) 1.8s 1 normal forwards`,
  "@media": {
    "screen and (max-width: 600px)": {
      width: "50px",
      borderWidth: "0px 1px 0px 0px",
    },
  },
});

export const RightObi = style({
  height: "0%",
  width: "100px",
  border: "solid",
  borderWidth: "0px 0px 0px 2px",
  borderColor: overlay_lineColor,
  animation: `${ObiAnimation} 0.7s cubic-bezier(0.4, 0.01, 0, 1) 1.8s 1 normal forwards`,
  "@media": {
    "screen and (max-width: 600px)": {
      width: "50px",
      borderWidth: "0px 0px 0px 1px",
    },
  },
});

export const Container = style({
  height: "9%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "stretch",
});

const SubTitleRatio = 25; // percentage
export const KashiwadeLogo = style({
  height: `${100 - SubTitleRatio}%`,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

const LogoLeft = keyframes({
  "0%": { top: "+100%" },
  "100%": { top: "0px" },
});

export const SVGContainerLeft = style({
  position: "relative",
  height: "100%",
  width: "fit-content",
  top: "+100%",
  animation: `${LogoLeft} 0.5s cubic-bezier(0.4, 0.01, 0, 1) 0.3s 1 normal forwards`,
});

const LogoRight = keyframes({
  "0%": { top: "-100%" },
  "100%": { top: "0px" },
});

export const SVGContainerRight = style({
  position: "relative",
  height: "100%",
  width: "fit-content",
  top: "-100%",
  animation: `${LogoRight} 0.5s cubic-bezier(0.4, 0.01, 0, 1) 0.3s 1 normal forwards`,
});

const LogoText = keyframes({
  "0%": { width: "0%" },
  "100%": { width: "72.9474%" },
});
export const SVGContainerText = style({
  height: "100%",
  width: "0%",
  overflow: "hidden",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "flex-end",
  alignItems: "center",
  animation: `${LogoText} 0.7s cubic-bezier(0.4, 0.01, 0, 1) 0.7s 1 normal forwards`,
});

export const SVGContainerTextInner = style({
  position: "relative",
  height: "100%",
  width: "fit-content",
});

const SubTitleText = keyframes({
  "0%": { height: "0%" },
  "100%": { height: `${SubTitleRatio}%` },
});
export const SubTitle = style({
  width: "100%",
  height: "0%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "flex-end",
  alignItems: "center",
  alignContent: "flex-end",
  animation: `${SubTitleText} 0.5s cubic-bezier(0.4, 0.01, 0, 1) 1.4s 1 normal forwards`,
});

export const SubTitleInner = style({
  width: "70%",
  fontFamily: '"Kanit"',
  fontSize: "15px",
  fontWeight: 100,
  color: overlay_logoColor,
  verticalAlign: "bottom",
  textAlign: "justify",
  textAlignLast: "justify",
  letterSpacing: "-0.1em",
  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "12px",
    },
    "screen and (max-width: 400px)": {
      fontSize: "11px",
    },
  },
});

export const FullOverlay2 = style({
  position: "fixed",
  left: "0",
  top: "0",
  zIndex: 150,
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
});

const Rect1Animation = keyframes({
  "0%": { transform: "scale(0) rotate(45deg)" },
  "100%": { transform: "scale(1) rotate(0deg)" },
});
export const Rect1 = style({
  height: "100vmax",
  width: "100vmax",
  transform: "scale(0) rotate(45deg)",
  background: overlay_transition_rect1,
  animation: `${Rect1Animation} 1s cubic-bezier(0.4, 0.01, 0, 1) 1.8s 1 normal forwards`,
});

export const FullOverlay3 = style({
  position: "fixed",
  left: "0",
  top: "0",
  zIndex: 150,
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
});

export const Rect2 = style({
  height: "100vmax",
  width: "100vmax",
  transform: "scale(0) rotate(45deg)",
  background: overlay_transition_rect2,
  animation: `${Rect1Animation} 1.6s cubic-bezier(0.4, 0.01, 0, 1) 2.1s 1 normal forwards`,
});

export const FullOverlay4 = style({
  position: "fixed",
  left: "0",
  top: "0",
  zIndex: 150,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
});

const ObiAnimation2 = keyframes({
  "0%": { width: "0%" },
  "100%": { width: "100%" },
});
export const TopObi = style({
  height: "100px",
  width: "0%",
  border: "solid",
  borderWidth: "0px 0px 1px 0px",
  borderColor: overlay_lineColor,
  animation: `${ObiAnimation2} 1.6s cubic-bezier(0.4, 0.01, 0, 1) 2.1s 1 normal forwards`,
  "@media": {
    "screen and (max-width: 600px)": {
      height: "50px",
      borderWidth: "0px 0px 1px 0px",
    },
  },
});

export const BottomObi = style({
  height: "100px",
  width: "0%",
  border: "solid",
  borderWidth: "1px 0px 0px 0px",
  borderColor: overlay_lineColor,
  animation: `${ObiAnimation2} 1.6s cubic-bezier(0.4, 0.01, 0, 1) 2.1s 1 normal forwards`,
  "@media": {
    "screen and (max-width: 600px)": {
      height: "50px",
      borderWidth: "1px 0px 0px 0px",
    },
  },
});
