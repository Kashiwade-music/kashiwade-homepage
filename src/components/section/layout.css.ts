import { createVar, style } from "@vanilla-extract/css";

export const sectionWrapWidth = createVar();
export const sectionLeftPosition = createVar();

export const SectionWrapper = style({
  height: "100%",
  width: sectionWrapWidth,
  top: "0",
  left: sectionLeftPosition,
  position: "fixed",
  zIndex: 500,
});

export const SectionMain = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  color: "white",
  fontSize: "100px",
  // backgroundColor: "rgba(255, 182, 218, 0.5)",
});
