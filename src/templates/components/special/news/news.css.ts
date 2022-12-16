import { keyframes, style, createVar } from "@vanilla-extract/css";

export const borderColor = createVar();
export const dateColor = createVar();
export const newsColor = createVar();

export const News = style({
  fontFamily: "Zen Old Mincho",
});

export const NewsFieldParent = style({
  display: "grid",
  gridTemplateColumns: "1fr 5fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "20px",
  gridRowGap: "0px",
  padding: "5px",
  borderTop: `1px dashed ${borderColor}`,
});

export const NewsFieldParentFirst = style({
  display: "grid",
  gridTemplateColumns: "1fr 5fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "20px",
  gridRowGap: "0px",
  padding: "5px",
});

export const DateField = style({
  gridArea: "1 / 1 / 2 / 2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: dateColor,
  fontSize: "16px",
  "@media": {
    "screen and (max-width: 560px)": {
      fontSize: "14px",
    },
  },
});

export const NewsField = style({
  gridArea: "1 / 2 / 2 / 3",
  color: newsColor,
  fontSize: "16px",
  "@media": {
    "screen and (max-width: 560px)": {
      fontSize: "14px",
    },
  },
});
