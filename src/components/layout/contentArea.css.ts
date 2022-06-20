import { style } from "@vanilla-extract/css";
import GlobalStyleConsts from "../../styles/GlobalStyleConsts";

export const ContentAreaCSS = style({
  height: "auto",
  margin: "auto",
  padding: GlobalStyleConsts.desktop.padding,
  maxWidth: "1200px",
  backgroundColor: "#fff",
  "@media": {
    "screen and (max-width: 600px)": {
      padding: GlobalStyleConsts.smartphone.padding,
    },
    "screen and (min-width: 601px) and (max-width: 800px)": {
      padding: GlobalStyleConsts.tablet.padding,
    },
  },
});

export const Outer = style({
  margin: "auto",
  backgroundColor: "rgb(236, 236, 236)",
});
