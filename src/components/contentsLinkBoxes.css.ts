import { style } from "@vanilla-extract/css";

export const ContentLinkBoxAreaCSS = style({
  margin: "0",
  display: "grid",
  gap: "0 2%",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gridAutoRows: "auto",
  "@media": {
    "screen and (max-width: 600px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    },
  },
});

export const LinkTextDecoration = style({
  color: "black",
  textDecoration: "none",
});

export const Box = style({
  opacity: 1,
  transition: "all 0.3s",
  position: "relative",
  marginBottom: "2em",
  ":hover": {
    opacity: 0.8,
  },
});

export const Title = style({
  margin: "3px 0px",
  fontSize: "17px",
  fontFamily: '"Noto Sans JP", sans-serif',
  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "16px",
    },
  },
});

export const Tags = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  position: "absolute",
  right: "3px",
  top: "3px",
});

export const TagUl = style({
  margin: "5px",
  padding: "0",
  listStyle: "none",
});

export const Tag = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "150px",
  height: "20px",
  borderRadius: "5px",
  padding: "0 0.5em",
  backgroundColor: "#fff",
  border: "1px solid #aaa",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  color: "rgb(107, 107, 107)",
  fontSize: "12px",
  textDecoration: "none",
  WebkitTransition: "0.2s",
  transition: "0.2s",
  boxSizing: "border-box",
  ":hover": {
    backgroundColor: "rgb(147, 147, 147)",
    border: "1px solid rgb(147, 147, 147)",
    color: "rgb(44, 43, 43)",
  },
  selectors: {
    "&:before": {
      content: '"#"',
      paddingRight: "2px",
    },
  },
});

export const Description = style({
  margin: "3px 0px",
  fontSize: "15px",
  fontWeight: 100,
  color: "rgb(105, 104, 104)",
  fontFamily: '"Noto Sans JP", sans-serif',
  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "13px",
    },
  },
});
