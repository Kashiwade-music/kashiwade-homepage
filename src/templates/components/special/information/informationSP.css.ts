import { style, createVar } from "@vanilla-extract/css";

export const InfoFieldKeyColor = createVar();
export const InfoFieldValueColor = createVar();
export const BorderColor = createVar();

export const JacketWrapper = style({
  width: "100%",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
});

export const Jacket = style({
  width: "70%",
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
    },
  },
});

export const InfoFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
});

export const InfoFieldWrapFirst = style({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
    },
  },
});
export const InfoFieldWrap = style({
  width: "70%",
  borderTop: `1px dashed ${BorderColor}`,
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
    },
  },
});

export const InfoFieldFirst = style({
  width: "100%",

  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "15px",
  gridRowGap: "0px",
  padding: "5px 0 5px 0 ",
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
    },
  },
});

export const InfoField = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "15px",
  gridRowGap: "0px",
  padding: "5px 0 5px 0 ",

  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
    },
  },
});

export const InfoFieldKey = style({
  gridArea: "1 / 1 / 2 / 2",
  fontFamily: "Zen Old Mincho",
  fontWeight: "900",
  fontSize: "16px",
  color: InfoFieldKeyColor,
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "flex-start",
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "14px",
    },
  },
});

export const InfoFieldValue = style({
  gridArea: "1 / 2 / 2 / 3",
  fontFamily: "Zen Old Mincho",
  fontSize: "16px",
  color: InfoFieldValueColor,
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "14px",
    },
  },
});

export const ShopHeaderTextColor = createVar();
export const ShopHeaderBGColor = createVar();

export const ShopItem = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 0 0 0",
});
export const ShopHeader = style({
  width: "70%",
  backgroundColor: ShopHeaderBGColor,
  color: ShopHeaderTextColor,
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Zen Old Mincho",
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
    },
  },
});

export const AccordionItemFlexBox = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "flex-start",
  width: "70%",
  "@media": {
    "screen and (max-width: 500px)": {
      width: "100%",
    },
  },
});

export const AccordionItem = style({
  minWidth: "45%",
  padding: "5px 0 5px 0 ",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const AccordionItemA = style({
  fontFamily: "Zen Old Mincho",
  color: InfoFieldValueColor,
});
