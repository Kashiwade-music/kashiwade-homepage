import { style } from "@vanilla-extract/css";
import GlobalStyleConsts from "./GlobalStyleConsts";

export const ContentAreaCSS = style({
  height: "auto",
  margin: "auto",
  padding: `16px ${GlobalStyleConsts.desktop.padding} ${GlobalStyleConsts.desktop.padding} ${GlobalStyleConsts.desktop.padding}`,
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

export const ContentAreaCSSNonPadding = style({
  height: "auto",
  margin: "auto",
  maxWidth: "1264px",
  width: "100%",
  backgroundColor: "#fff",
});

export const Outer = style({
  margin: "auto",
  backgroundColor: "rgb(236, 236, 236)",
});

export const FirstHeaderPadding = style({
  paddingTop: GlobalStyleConsts.desktop.padding,
  "@media": {
    "screen and (max-width: 600px)": {
      paddingTop: GlobalStyleConsts.smartphone.padding,
    },
    "screen and (min-width: 601px) and (max-width: 800px)": {
      paddingTop: GlobalStyleConsts.tablet.padding,
    },
  },
});

export const Header = style({
  height: "100px",
  position: "relative",
  zIndex: 0,
  overflow: "hidden",
});

export const HeaderTitle = style({
  width: "100%",
  fontSize: "40px",
  fontFamily: '"Kanit"',
  fontWeight: 200,
  textAlign: "center",
  marginTop: "0",
  marginBottom: "10px",
  position: "absolute",
  zIndex: 1,
  top: "30%",
  left: "50%",
  transform: "translateY(-50%) translateX(-50%)",
});

export const HeaderTitleBottomLine = style({
  height: "auto",
  width: "350px",
  textAlign: "center",
  position: "absolute",
  zIndex: 0,
  top: "62.5%",
  left: "50.7%",
  transform: "translateY(-50%) translateX(-50%)",
});

export const MoreLinkBox = style({
  width: "100%",
  textAlign: "center",
});

export const MoreLink = style({
  padding: "0 10px",
  textDecoration: "none",
  fontSize: "25px",
  fontFamily: '"Kanit"',
  fontWeight: 200,
  color: "#329b51",
  background: "linear-gradient(transparent 100%, #94e39c 0%)",
  ":hover": {
    background: "linear-gradient(transparent 95%, #94e39c 0%)",
  },
});
