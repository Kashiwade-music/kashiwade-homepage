import { keyframes, style, createVar } from "@vanilla-extract/css";

export const scroll_main_color = createVar();
export const scroll_background_color = createVar();

export const Parent = style({
  width: "100%",
  height: "100vh",
});

export const ScrollWrapper = style({
  position: "absolute",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
});

const ScrollAnimation = keyframes({
  "0%": { transform: "scale(1, 0)", transformOrigin: "0 0" },
  "25%": { transform: "scale(1, 1)", transformOrigin: "0 0" },
  "50%": { transform: "scale(1, 1)", transformOrigin: "0 100%" },
  "75%, 100%": { transform: "scale(1, 0)", transformOrigin: "0 100%" },
});

export const Scroll = style({
  fontSize: "20px",
  fontFamily: "Kanit",
  fontWeight: 200,
  color: scroll_main_color,
  textDecoration: "none",
  textTransform: "uppercase",
  paddingBottom: "60px",
  "::before": {
    content: "",
    position: "absolute",
    bottom: "0",
    left: "50%",
    width: "2px",
    height: "60px",
    background: scroll_background_color,
  },
  "::after": {
    content: "",
    position: "absolute",
    bottom: "0",
    left: "50%",
    width: "2px",
    height: "60px",
    background: scroll_main_color,
    animation: `${ScrollAnimation} 2s cubic-bezier(0.4, 0.01, 0, 1) infinite`,
  },
});
