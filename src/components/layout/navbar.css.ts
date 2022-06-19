import { style } from "@vanilla-extract/css";

export const NavBar = style({
  position: "sticky",
  top: "0px",
  zIndex: 50,
  backgroundColor: "white",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  borderBottom: "solid 1px #ddd",
  fontSize: "1.6em",
});

export const NavTop = style({
  fontFamily: '"Kanit"',
  verticalAlign: "middle",
  fontWeight: 300,
  marginLeft: "1.3em",
  color: "black",
  textDecoration: "none",
  padding: "7px 0px",
  "@media": {
    "screen and (max-width: 670px)": {
      marginLeft: "9px",
    },
  },
});

export const NavContentBox = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  marginRight: "1.2em",
  "@media": {
    "screen and (max-width: 670px)": {
      marginRight: "0",
    },
  },
});

export const NavContent = style({
  minWidth: 76.8,
  maxWidth: 90,
  background: "linear-gradient(transparent 100%, #94e39c 0%)",
  textAlign: "center",
  margin: "0px 9px",
  fontFamily: '"Kanit"',
  padding: "7px 0px",
  fontWeight: 200,
  color: "black",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      background: "linear-gradient(transparent 95%, #94e39c 0%)",
    },
  },
});

export const NavContentActive = style({
  minWidth: 76.8,
  maxWidth: 90,
  background: "linear-gradient(transparent 100%, #94e39c 0%)",
  textAlign: "center",
  margin: "0px 9px",
  fontFamily: '"Kanit"',
  padding: "7px 0px",
  fontWeight: 200,
  color: "#329b51",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      background: "linear-gradient(transparent 95%, #94e39c 0%)",
    },
  },
});

export const NavUlSmartphone = style({
  paddingLeft: "0px",
  listStyle: "none",
  textAlign: "center",
});

export const NavUlContent = style({
  paddingBottom: "0.7em",
});

export const NavTopSmartphone = style({
  fontFamily: '"Kanit"',
  verticalAlign: "middle",
  fontWeight: 300,
  marginLeft: "0.7em",
  color: "black",
  textDecoration: "none",
  padding: "7px 0px",
});

export const NavHumbergButton = style({
  display: "block",
  margin: "0 0 0 auto",
  fontFamily: "inherit",
  appearance: "none",
  border: "0",
  borderRadius: "5px",
  background: "#fff",
  color: "#fff",
  padding: "8px 16px",
  fontSize: "1rem",
  cursor: "pointer",
});

export const NavHumbergButtonSVG = style({
  display: "inline-block",
  verticalAlign: "middle",
  fill: "#000",
  height: "100%",
  marginRight: "0.25rem",
});
