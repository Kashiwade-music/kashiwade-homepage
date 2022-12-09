import { keyframes, style } from "@vanilla-extract/css";

export const HeaderImage = style({
  position: "absolute",
  height: "100vh",
});

export const AdditionalHeaderImage = style({
  position: "absolute",
  height: "100vh",
});

export const LogoImage = style({
  position: "absolute",
  height: "45vh",
  width: "45vh",
});

export const LogoImageSP = style({
  position: "absolute",
  height: "40vh",
  width: "40vh",
});

export const LogoImageSPmini = style({
  position: "absolute",
  height: "100vw",
  width: "100%",
});

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
