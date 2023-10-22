import { style, createVar } from "@vanilla-extract/css";

export const SpecialPageLinkBoxParent = style({
  width: "100%",
  height: "150px",
  border: "1px solid #ddd",
  position: "relative",
  "@media": {
    "screen and (max-width: 500px)": {
      height: "125px",
    },
  },
});

export const BackgroundWrapper = style({
  width: "100%",
  height: "100%",

  overflow: "hidden",
  position: "relative",
  zIndex: "2",
});

export const LogoMixBlendMode = createVar();
export const LogoImagePositioner = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "40%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1",
  mixBlendMode: LogoMixBlendMode,
  "@media": {
    "screen and (max-width: 500px)": {
      width: "55%",
    },
  },
});

export const LogoImage = style({
  maxHeight: "150px",
  width: "100%",
  zIndex: "1",
  "@media": {
    "screen and (max-width: 500px)": {
      maxHeight: "125px",
    },
  },
});

export const Background = style({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  minHeight: "calc(150px * 2)",
  width: "100%",
  zIndex: "0",
  transform: "translateY(-25%)",
  "@media": {
    "screen and (max-width: 500px)": {
      minHeight: "125px",
      transform: "translateY(0%)",
    },
    "screen and (max-width: 300px)": {
      minHeight: "125px",
      transform: "translateY(0%)",
    },
  },
});
