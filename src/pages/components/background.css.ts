import { P5WrapperClassName, ReactP5Wrapper } from "@p5-wrapper/react";
import { style } from "@vanilla-extract/css";

export const BackgroundWrapper = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  zIndex: -1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const BackgroundImage = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  zIndex: -100,
});

export const BackgroundImage2 = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  zIndex: -80,
});

export const P5Wrapper = style({
  selectors: {
    "&.react-p5-wrapper": {
      mixBlendMode: "overlay",
    },
  },
});
