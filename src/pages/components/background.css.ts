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

export const BackgroundImageWrapper = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  //mixBlendMode: "overlay",
});

export const BackgroundImage = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  zIndex: -100,
  mixBlendMode: "overlay",
});

export const BackgroundImage2 = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  zIndex: -80,
});

export const BackgroundBaseColor = style({
  background: "radial-gradient( #63637e,#19192a)",
  // background: "radial-gradient( #e66465, #9198e5)",
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  zIndex: -110,
});
