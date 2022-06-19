import { style } from "@vanilla-extract/css";

export const Footer = style({
  height: "200px",
  width: "100%",
  backgroundColor: "#6363a8",
});

export const IconFlexContainer = style({
  display: "flex",
  height: "100%",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "stretch",
  alignContent: "stretch",
});

export const IconFlexChild = style({
  width: "120px",
  display: "flex",
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: "auto",
  justifyContent: "center",
  alignItems: "center",
  order: 0,
});

export const SnsSoundcloud = style({
  color: "white",
  verticalAlign: "middle",
  ":hover": {
    color: "#fe5000",
  },
});

export const SnsYoutube = style({
  color: "white",
  verticalAlign: "middle",
  ":hover": {
    color: "#ff0000",
  },
});

export const SnsTwitter = style({
  color: "white",
  verticalAlign: "middle",
  ":hover": {
    color: "#1da1f2",
  },
});
