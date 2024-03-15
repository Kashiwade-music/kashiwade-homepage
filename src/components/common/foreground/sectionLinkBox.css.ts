import { style } from "@vanilla-extract/css";

export const SectionLinkWrapper = style({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
  height: "100%",
  top: "0",
  position: "fixed",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const SectionLink = style({
  width: "100%",
  height: "6%",
  maxWidth: "500px",
  minWidth: "300px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const SectionSVG = style({
  width: "100%",
  maxWidth: "500px",
  minWidth: "300px",
  position: "absolute",
});

export const SectionMarker = style({
  width: "12vw",
  maxWidth: "200px",
  minWidth: "110px",
  height: "50%",
  left: "min(1vw, 20px)",
  position: "absolute",
  // bottom 1px border
  borderBottom: "1px solid #f4f4f6",
});
