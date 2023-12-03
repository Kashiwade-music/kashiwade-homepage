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
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  height: "100vh",
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
