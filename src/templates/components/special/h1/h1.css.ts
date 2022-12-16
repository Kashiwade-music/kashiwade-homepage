import { keyframes, style, createVar } from "@vanilla-extract/css";

export const HeadlineBorderColor = createVar();
export const HeadlineTextColor = createVar();
export const Headline = style({
  fontFamily: "Zen Old Mincho",
  textAlign: "center",
  fontSize: "24px",
  padding: "30px 0 10px 0",
  margin: "0",

  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "::before": {
    content: "''",
    top: "50%",
    display: "inline-block",
    width: "50%",
    height: "1px",
    backgroundColor: HeadlineBorderColor,
  },
  "::after": {
    content: "''",
    top: "50%",
    display: "inline-block",
    width: "50%",
    height: "1px",
    backgroundColor: HeadlineBorderColor,
  },
});

export const HeadlineP = style({
  padding: "0 10px",
  margin: "0",
  color: HeadlineTextColor,
});
