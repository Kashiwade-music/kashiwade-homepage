import { style } from "@vanilla-extract/css";

export const Parent = style({
  display: "grid",
  gridTemplateColumns: "200px 1fr 200px",
  gridTemplateRows: "repeat(2, 30px)",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  paddingTop: "30px",
});

export const ParentMini = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "repeat(2, 30px)",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  paddingTop: "30px",
});

export const NextGrid = style({
  gridArea: "1 / 1 / 3 / 2",
  border: "solid 1px #ddd",
  borderRight: "none",

  display: "grid",
  gridTemplateColumns: "100px 1fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "0px",
  gridRowGap: "0px",
});

export const NextGridArrow = style({
  gridArea: "1 / 1 / 2 / 2",
});

export const NextGridText = style({
  gridArea: "1 / 2 / 2 / 3",
});

export const CentorGrid = style({
  gridArea: "1 / 2 / 3 / 3",
  border: "solid 1px #ddd",
  borderRight: "none",
  placeContent: "center",
  display: "grid",
  fontSize: "12px",
  fontFamily: '"Kanit"',
  fontWeight: 100,
});

export const PreviousGrid = style({
  gridArea: "1 / 3 / 3 / 4",
  border: "solid 1px #ddd",
});
