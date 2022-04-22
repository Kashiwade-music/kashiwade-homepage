import { style } from "@vanilla-extract/css";

export const EZDrawer__checkbox = style({
  display: "none",
});

export const EZDrawer__overlay = style({
  display: "none",
  height: "100vh",
  left: 0,
  position: "fixed",
  top: 0,
  width: "100%",
  selectors: {
    [`${EZDrawer__checkbox}:checked ~ &`]: {
      display: "block",
      opacity: 1,
    },
  },
});

export const EZDrawer__container = style({
  position: "fixed",
  visibility: "hidden",
  background: "white",
  transition: "all",
  boxShadow: "0 0 10px 5px rgba(#000000, 0.1)",
  selectors: {
    [`${EZDrawer__checkbox}:checked ~ &`]: {
      visibility: "visible",
      transform: "translate3d(0, 0, 0) !important",
    },
  },
});
