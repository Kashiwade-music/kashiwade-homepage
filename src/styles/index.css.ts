import { style } from "@vanilla-extract/css";

export const Header = style({
  height: "100px",
  position: "relative",
  zIndex: 0,
  overflow: "hidden",
  marginBottom: "20px",
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
