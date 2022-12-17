import { style, createVar } from "@vanilla-extract/css";

export const Accordion = style({
  padding: "0 0 10px 0",
  "@media": {
    "screen and (max-width: 1000px)": {
      padding: "0 0 8px 0",
    },
    "screen and (max-width: 800px)": {
      padding: "0 0 5px 0",
    },
  },
});
export const InfoFieldKeyColor = createVar();
export const InfoFieldValueColor = createVar();
export const BorderColor = createVar();
export const AccordionHeaderTextColor = createVar();
export const AccordionHeaderBGColor = createVar();
export const AccordionHeaderHoverColor = createVar();
export const AccordionHeaderStyle = style({
  backgroundColor: AccordionHeaderBGColor,
  textTransform: "none",
  fontFamily: "Zen Old Mincho",
  fontSize: "16px",
  padding: "3px 0 3px 0",
  border: 0,
  color: AccordionHeaderTextColor,
  width: "100%",
  transition: "all 0.2s",
  textAlign: "center",
  ":hover": {
    backgroundColor: AccordionHeaderHoverColor,
  },
  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: "15px",
    },
    "screen and (max-width: 800px)": {
      fontSize: "14px",
      padding: "2px",
    },
  },
});

export const AccordionItemFlexBox = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "flex-start",
});

export const AccordionItemFirst = style({
  minWidth: "33%",
  padding: "5px 0 5px 0 ",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: "15px",
    },
    "screen and (max-width: 800px)": {
      fontSize: "14px",
    },
  },
});

export const AccordionItem = style({
  minWidth: "33%",
  padding: "5px 0 5px 0 ",
  borderTop: `1px dashed ${BorderColor}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: "15px",
    },
    "screen and (max-width: 800px)": {
      fontSize: "14px",
    },
  },
});

export const AccordionItemA = style({
  fontFamily: "Zen Old Mincho",
  color: InfoFieldValueColor,
});

export const MyCollapse = style({
  transition: "height 300ms",
  height: "fit-content",
  overflow: "hidden",
  color: "white",
  backgroundColor: "#333",
});

export const MyCollapseVisible = style({
  height: "30px",
});

export const MyCollapseHidden = style({
  height: "0px",
});

export const Parent = style({
  width: "100%",
  aspectRatio: "2/1",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "1fr",
  gridColumnGap: "20px",
  "@media": {
    "screen and (max-width: 1000px)": {
      gridColumnGap: "15px",
    },
    "screen and (max-width: 800px)": {
      gridColumnGap: "10px",
    },
  },
});

export const Jacket = style({
  gridArea: "1 / 1 / 2 / 2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Info = style({
  gridArea: "1 / 2 / 2 / 3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const InfoFieldWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  width: "100%",
});

export const InfoFieldFirst = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "130px 1fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "10px",
  gridRowGap: "0px",
  padding: "5px 0 5px 0 ",
  "@media": {
    "screen and (max-width: 1000px)": {
      gridTemplateColumns: "120px 1fr",
    },
    "screen and (max-width: 800px)": {
      gridColumnGap: "0px",
      gridTemplateColumns: "100px 1fr",
    },
  },
});

export const InfoField = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "130px 1fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "10px",
  gridRowGap: "0px",
  padding: "5px 0 5px 0 ",
  borderTop: `1px dashed ${BorderColor}`,
  "@media": {
    "screen and (max-width: 1000px)": {
      gridTemplateColumns: "120px 1fr",
    },
    "screen and (max-width: 800px)": {
      gridColumnGap: "0px",
      gridTemplateColumns: "100px 1fr",
    },
  },
});

export const InfoFieldKey = style({
  gridArea: "1 / 1 / 2 / 2",
  fontFamily: "Zen Old Mincho",
  fontWeight: "900",
  fontSize: "17px",
  color: InfoFieldKeyColor,
  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: "15px",
    },
    "screen and (max-width: 800px)": {
      fontSize: "14px",
    },
  },
});

export const InfoFieldValue = style({
  gridArea: "1 / 2 / 2 / 3",
  fontFamily: "Zen Old Mincho",
  fontSize: "17px",
  color: InfoFieldValueColor,
  "@media": {
    "screen and (max-width: 1000px)": {
      fontSize: "15px",
    },
    "screen and (max-width: 800px)": {
      fontSize: "14px",
    },
  },
});
