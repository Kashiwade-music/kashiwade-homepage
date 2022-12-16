import { keyframes, style } from "@vanilla-extract/css";

export const LogoImageWrapper = style({
  position: "absolute",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingLeft: "calc(5vw + 10px)",
});

export const LogoImageWrapperSP = style({
  position: "absolute",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
