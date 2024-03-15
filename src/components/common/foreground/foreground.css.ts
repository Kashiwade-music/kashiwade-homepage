import { style, createVar } from "@vanilla-extract/css";

export const FrameLeftTopPositioner = style({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
  position: "fixed",
  top: "0",
  zIndex: 1000,
});

export const FrameRightBottomPositioner = style({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
  position: "fixed",
  bottom: "0",
  right: "0",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  zIndex: 1000,
});

export const FrameLeftBottomPositioner = style({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
  position: "fixed",
  bottom: "0",
  left: "0",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  zIndex: 1000,
});

export const FrameRightTopPositioner = style({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
  position: "fixed",
  top: "0",
  right: "0",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  zIndex: 1000,
});
