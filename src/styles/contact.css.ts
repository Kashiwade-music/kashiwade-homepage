import { style, globalStyle } from "@vanilla-extract/css";

export const LinkBoxFlexContainer = style({
  display: "flex",
  justifyContent: "center",
  margin: "32px 0 0 0",
  "@media": {
    "screen and (max-width: 500px)": {
      margin: "0.5em 0 0 0",
    },
  },
});

export const LinkBox = style({
  flex: "0.5 1 auto",
  alignSelf: "center",

  border: "1px solid #ddd",
  display: "grid",
  gridTemplateColumns: "25% 1fr",
  gridTemplateRows: "125px",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  width: "100%",
  maxWidth: "600px",
  opacity: 1,
  transition: "all .3s",
  ":hover": {
    opacity: 0.6,
  },
});

export const SNSIcon = style({
  gridArea: "1 / 1 / 2 / 2",
  alignItems: "center",
  display: "grid",
  justifyContent: "center",
});

export const SNSNameDescription = style({
  gridArea: "1 / 2 / 2 / 3",
  margin: "10px 20px",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  "@media": {
    "screen and (max-width: 500px)": {
      margin: "10px 10px",
    },
  },
});

export const SNSName = style({
  gridArea: "1 / 1 / 2 / 2",
  fontFamily: "Kanit",
  fontWeight: 200,
  fontSize: "2em",
  alignItems: "center",
  display: "grid",
  justifyContent: "left",
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "1.7em",
    },
  },
});

export const SNSDescription = style({
  gridArea: "2 / 1 / 3 / 2",
  fontFamily: "Noto Sans JP,sans-serif",
  fontWeight: 200,
  fontSize: "18px",
  alignItems: "center",
  display: "grid",
  justifyContent: "left",
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "16px",
    },
  },
});

export const MdContentsParent = style({});
