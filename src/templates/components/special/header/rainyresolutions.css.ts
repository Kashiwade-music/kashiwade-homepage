import { style } from "@vanilla-extract/css";

export const LogoImageWrapper = style({
  position: "absolute",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const LogoImageWrapperSP = style({
  position: "absolute",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const LogoPositioner = style({
  display: ["-webkit-flex", "flex"],
  WebkitFlexDirection: "column",
  flexDirection: "column",
  WebkitFlexWrap: "nowrap",
  flexWrap: "nowrap",
  WebkitJustifyContent: "space-between",
  justifyContent: "space-between",
  WebkitAlignItems: "stretch",
  alignItems: "stretch",
  height: "100vh",
  width: "100%",
  position: "absolute",
});

export const LogoPositionerSP = style({
  display: ["-webkit-flex", "flex"],
  WebkitFlexWrap: "nowrap",
  flexWrap: "nowrap",
  WebkitJustifyContent: "space-between",
  justifyContent: "space-between",
  height: "100vh",
  width: "100%",
  position: "absolute",
});
