import { style } from "@vanilla-extract/css";

export const ContentAreaCSS = style({
  height: "auto",
  margin: "auto",
  padding: "2em",
  maxWidth: "1200px",
  backgroundColor: "#fff",
  "@media": {
    "screen and (max-width: 500px)": {
      padding: "0.5em",
    },
  },
});

export const Outer = style({
  margin: "auto",
  backgroundColor: "rgb(236, 236, 236)",
});
