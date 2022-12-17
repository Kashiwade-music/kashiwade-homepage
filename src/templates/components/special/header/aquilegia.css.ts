import { style } from "@vanilla-extract/css";

export const LogoImageWrapper = style({
  position: "absolute",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 100vh)": {
      justifyContent: "flex-start",
    },
  },
});

export const LogoImage = style({
  width: "50%",
  "@media": {
    "screen and (max-width: 150vh)": {
      width: "60%",
    },
    "screen and (max-width: 100vh)": {
      width: "70%",
    },
    "screen and (max-width: 70vh)": {
      width: "90%",
    },
  },
});

export const AdditionalHeaderImage = style({
  height: "40vh",
  width: "40vh",
  "@media": {
    "screen and (max-width: 70vh)": {
      height: "30vh",
      width: "30vh",
    },
  },
});

export const AdditionalHeaderImageWrapper = style({
  position: "absolute",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
});

export const AdditionalHeaderImage2Wrapper = style({
  position: "absolute",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-end",
});
