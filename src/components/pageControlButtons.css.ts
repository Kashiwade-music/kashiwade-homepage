import { style } from "@vanilla-extract/css";

export const Parent = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "48px",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  paddingTop: "20px",
});

export const ParentMini = style({
  paddingTop: "30px",
});

export const NextGrid = style({
  gridArea: "1 / 1 / 2 / 2",
  borderRight: "none",

  display: "grid",
  gridTemplateColumns: "50px 1fr",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "0px",
  gridRowGap: "0px",
});

export const NextGridIcon = style({
  gridArea: "1 / 1 / 3 / 2",
  display: "grid",
  placeItems: "center",
  left: "-5px",
  position: "relative",
  transition: "all .2s",
  selectors: {
    [`${NextGrid}:hover &`]: {
      left: "-10px",
    },
  },
});

export const NextGridNextText = style({
  gridArea: "1 / 2 / 2 / 3",
  display: "grid",
  alignItems: "end",
  justifyContent: "left",
  fontFamily: '"Kanit", "Noto Sans JP", sans-serif',
  fontWeight: 200,
  fontSize: "larger",
});

export const NextGridSubTitle = style({
  gridArea: "2 / 2 / 3 / 3",
  display: "grid",
  alignItems: "start",
  justifyContent: "left",
  fontFamily: '"Kanit", "Noto Sans JP", sans-serif',
  fontWeight: 200,
  fontSize: "larger",
});

export const PreviousGrid = style({
  gridArea: "1 / 2 / 2 / 3",

  display: "grid",
  gridTemplateColumns: "1fr 50px",
  gridTemplateRows: "repeat(2, 1fr)",
  gridColumnGap: "0px",
  gridRowGap: "0px",
});

export const PreviousGridIcon = style({
  gridArea: "1 / 2 / 3 / 3",
  display: "grid",
  placeItems: "center",
  left: "5px",
  position: "relative",
  transition: "all .2s",
  selectors: {
    [`${PreviousGrid}:hover &`]: {
      left: "10px",
    },
  },
});

export const PreviousGridPreviousText = style({
  gridArea: "1 / 1 / 2 / 2",
  display: "grid",
  alignItems: "end",
  justifyContent: "right",
  fontFamily: '"Kanit", "Noto Sans JP", sans-serif',
  fontWeight: 200,
  fontSize: "larger",
});

export const PreviousGridSubTitle = style({
  gridArea: "2 / 1 / 3 / 2",
  display: "grid",
  alignItems: "start",
  justifyContent: "right",
  fontFamily: '"Kanit", "Noto Sans JP", sans-serif',
  fontWeight: 200,
  fontSize: "larger",
});

export const LinkArea = style({
  textDecoration: "none",
  color: "#666",
});
