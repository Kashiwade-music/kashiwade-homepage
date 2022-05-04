import { style } from "@vanilla-extract/css";

export const LinkBoxesAria = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(400px,1fr))",
  gap: "2em 2%",
  gridAutoRows: "max-content",
  margin: "0",
});

export const LinkBox = style({
  border: "1px solid #ddd",
  display: "grid",
  gridTemplateColumns: "25% 1fr",
  gridTemplateRows: "125px",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  minWidth: "200px",
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
});

export const SNSName = style({
  gridArea: "1 / 1 / 2 / 2",
  fontFamily: "Kanit",
  fontWeight: 200,
  fontSize: "2em",
  alignItems: "center",
  display: "grid",
  justifyContent: "left",
});

export const SNSDescription = style({
  gridArea: "2 / 1 / 3 / 2",
  fontFamily: "Noto Sans JP,sans-serif",
  fontWeight: 200,
  alignItems: "center",
  display: "grid",
  justifyContent: "left",
});
