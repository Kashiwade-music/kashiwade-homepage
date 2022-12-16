import { keyframes, style, createVar } from "@vanilla-extract/css";

export const BackgroundColor = createVar();

export const LayoutWrapper = style({
  backgroundColor: BackgroundColor,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 0 10px 0",
  position: "relative",
  zIndex: "-20",
});

export const BackgroundLayerPositioner = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",

  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  zIndex: "-1",
});

export const BackgroundLayer = style({
  minWidth: "1500px",
  width: "100%",
  height: "90%",
  zIndex: "-10",
});

export const BackgroundMixBlendLayer = style({
  backgroundColor: BackgroundColor,
  mixBlendMode: "screen",
  width: "100%",
  height: "90%",
  zIndex: "-5",
  position: "absolute",
});

export const BackgroundGradientLayer = style({
  width: "100%",
  height: "90%",
  zIndex: "-1",
  position: "absolute",
  backgroundImage: `linear-gradient(${BackgroundColor} 0, rgba(255,255,255,0) 70%)`,
});

export const Layout = style({
  width: "100%",
  maxWidth: "1000px",
});

export const LayoutInner = style({
  padding: "0 10px",
});
