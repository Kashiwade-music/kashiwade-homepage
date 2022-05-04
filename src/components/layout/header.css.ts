import { style } from "@vanilla-extract/css";
import HeaderBackgroundLoop from "../../images/header-background-loop.svg";

export const Header = style({
  height: "350px",
  position: "relative",
  zIndex: 0,
  overflow: "hidden",
  selectors: {
    "&:before": {
      content: '""',
      position: "absolute",
      width: "200%",
      height: "200%",
      top: "-50%",
      left: "-50%",
      zIndex: -1,
      transform: "rotate(-9deg)",
      backgroundImage: `url(${HeaderBackgroundLoop})`,
      backgroundSize: "500px 500px",
      backgroundRepeat: "repeat",
      opacity: 0.15,
    },
  },
});

export const HeaderSmartphone = style({
  height: "150px",
  position: "relative",
  zIndex: 0,
  overflow: "hidden",
  selectors: {
    "&:before": {
      content: '""',
      position: "absolute",
      width: "200%",
      height: "200%",
      top: "-50%",
      left: "-50%",
      zIndex: -1,
      transform: "rotate(-9deg)",
      backgroundImage: `url(${HeaderBackgroundLoop})`,
      backgroundSize: "500px 500px",
      backgroundRepeat: "repeat",
      opacity: 0.15,
    },
  },
});

export const HeaderTitle = style({
  fontSize: "55px",
  fontFamily: '"Kanit"',
  fontWeight: 200,
  textAlign: "center",
  position: "absolute",
  zIndex: 1,
  top: "50%",
  left: "50%",
  transform: "translateY(-50%) translateX(-50%)",
});

export const HeaderDescriptionColumn = style({
  height: "70px",
  position: "relative",
  zIndex: 0,
  borderTop: "solid 1px #ddd",
  borderBottom: "solid 1px #ddd",
});

export const HeaderDescription = style({
  textAlign: "center",
  position: "absolute",
  fontFamily: '"Noto Sans JP", sans-serif',
  top: "50%",
  left: "50%",
  width: "100%",
  transform: "translateY(-50%) translateX(-50%)",
});

export const HeaderTitleBottomLine = style({
  width: "350px",
  textAlign: "center",
  position: "absolute",
  zIndex: 0,
  top: "57%",
  left: "50.5%",
  transform: "translateY(-50%) translateX(-50%)",
});
