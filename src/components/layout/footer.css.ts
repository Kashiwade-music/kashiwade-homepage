import { style } from "@vanilla-extract/css";

export const Footer = style({
  height: "200px",
  backgroundColor: "#6363a8",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const SnsSoundcloud = style({
  fontSize: "40px",
  margin: "1em",
  color: "white",
  ":hover": {
    color: "#fe5000",
  },
});

export const SnsYoutube = style({
  fontSize: "40px",
  margin: "1em",
  color: "white",
  ":hover": {
    color: "#ff0000",
  },
});

export const SnsTwitter = style({
  fontSize: "40px",
  margin: "1em",
  color: "white",
  ":hover": {
    color: "#1da1f2",
  },
});
