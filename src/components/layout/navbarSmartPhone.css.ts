import { style, globalStyle } from "@vanilla-extract/css";
import GlobalStyleConsts from "../../styles/GlobalStyleConsts";

export const NavBar = style({
  height: "50px",
  position: "sticky",
  top: "0px",
  zIndex: 50,
  backgroundColor: "white",
  borderBottom: "solid 1px #ddd",
});

export const NavContentArea = style({
  height: "100%",
  fontSize: "25.6px",
  padding: `0 ${GlobalStyleConsts.smartphone.padding}`,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
});

export const NavTop = style({
  fontFamily: '"Kanit"',
  fontWeight: 300,
  color: "black",
  textDecoration: "none",
});

export const NavHumbergButton = style({
  margin: "0 0 0 auto",
  padding: "0px",
  border: "0",
  background: "#fff",
  cursor: "pointer",
});

export const NavContent = style({
  textAlign: "center",
  fontFamily: '"Kanit"',
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
  textAlign: "center",
  fontFamily: '"Kanit"',
  fontWeight: 200,
  color: "#329b51",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      background: "linear-gradient(transparent 95%, #94e39c 0%)",
    },
  },
});

export const NavUL = style({
  paddingLeft: "0px",
  listStyle: "none",
  textAlign: "center",
});

globalStyle(`${NavUL} > li`, {
  paddingBottom: "0.7em",
});
