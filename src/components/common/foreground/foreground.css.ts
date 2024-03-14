import { style } from "@vanilla-extract/css";

export const ForegroundWrapper = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  zIndex: 1000,
});

export const FrameLeftTopPositioner = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

export const FrameLeftTopPositionerInner = style({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
});

export const FrameRightBottomPositioner = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
});

export const FrameRightBottomPositionerInner = style({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
});

export const FrameLeftBottomPositioner = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-end",
});

export const FrameLeftBottomPositionerInner = style({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-end",
});

export const FrameRightTopPositioner = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
});

export const FrameRightTopPositionerInner = style({
  width: "30%",
  maxWidth: "500px",
  minWidth: "300px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
});
