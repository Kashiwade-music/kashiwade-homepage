import { style } from "@vanilla-extract/css";
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
  padding: `0 ${GlobalStyleConsts.desktop.padding}`,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 800px)": {
      padding: `0 ${GlobalStyleConsts.tablet.padding}`,
    },
  },
});

export const NavTop = style({
  fontFamily: '"Kanit"',
  fontWeight: 300,
  color: "black",
  textDecoration: "none",
});

export const NavContentBox = style({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const NavContent = style({
  minWidth: 76.8,
  maxWidth: 90,
  textAlign: "center",
  fontFamily: '"Kanit"',
  padding: "0px 5px",
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
  textAlign: "center",
  fontFamily: '"Kanit"',
  padding: "0px 5px",
  fontWeight: 200,
  color: "#329b51",
  textDecoration: "none",
  selectors: {
    "&:hover": {
      background: "linear-gradient(transparent 95%, #94e39c 0%)",
    },
  },
});
