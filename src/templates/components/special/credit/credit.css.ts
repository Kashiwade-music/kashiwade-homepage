import { style, createVar } from "@vanilla-extract/css";

export const CreditCenterFlexBox = style({
  width: "100%",

  height: "fit-content",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
});

export const CreditOthersFlexBox = style({
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "space-around",
});

export const CreditGridBox = style({
  height: "80px",
  width: "100%",
  padding: "0 0 20px 0",
  minWidth: "150px",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "20px 40px 20px",
  gridColumnGap: "0px",
  gridRowGap: "0px",
});

export const CreditOtherGridBox = style({
  height: "80px",
  width: "45%",
  padding: "0 0 20px 0",
  minWidth: "150px",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "20px 40px 20px",
  gridColumnGap: "0px",
  gridRowGap: "0px",
});

export const RoleColor = createVar();
export const CreditGridRole = style({
  gridArea: "1 / 1 / 2 / 2",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Zen Old Mincho",
  color: RoleColor,
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "14px",
    },
  },
});

export const NameColor = createVar();
export const CreditGridName = style({
  gridArea: "2 / 1 / 3 / 2",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Zen Old Mincho",
  fontSize: "30px",
  fontWeight: "600",
  color: NameColor,
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "25px",
    },
  },
});

export const CreditGridNameOthers = style({
  gridArea: "2 / 1 / 3 / 2",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Zen Old Mincho",
  fontSize: "25px",
  fontWeight: "600",
  color: NameColor,
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "20px",
    },
  },
});

export const AccountColor = createVar();
export const CreditGridAccount = style({
  gridArea: "3 / 1 / 4 / 2",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Zen Old Mincho",
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "14px",
    },
  },
});

export const A = style({
  textDecoration: "underline",
  color: AccountColor,
  padding: "0 5px 0 5px",
});
