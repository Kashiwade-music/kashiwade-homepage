import { style, globalStyle, createVar } from "@vanilla-extract/css";

export const HTMLBody = style({});
export const HeadlineBorderColor = createVar();
export const HeadlineTextColor = createVar();

globalStyle(`${HTMLBody} > h1`, {
  fontFamily: "Zen Old Mincho",
  textAlign: "center",
  fontSize: "24px",
  padding: "30px 0 10px 0",
  margin: "0",

  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
