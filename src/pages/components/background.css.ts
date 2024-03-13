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
  mixBlendMode: "overlay",
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

export const CelestialGlobe = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  zIndex: -70,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mixBlendMode: "overlay",
});
