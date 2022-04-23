import { style } from "@vanilla-extract/css";

export const WorkPostContainer = style({
  display: "grid",
  gap: "3% 3%",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridTemplateRows: "auto",
  marginBottom: "3em",
});

export const ItemName = style({
  fontFamily: '"Kanit"',
  fontWeight: 200,
  fontSize: "18px",
  color: "rgb(112, 112, 112)",
  padding: "0 0 0 17px",
  borderLeft: "6px solid #878ac4",
  borderBottom: "1px solid #878ac4",
});

export const ItemSpec = style({
  fontFamily: '"Kanit", "Noto Sans JP", sans-serif',
  fontWeight: 200,
  fontSize: "20px",
  padding: "0 0 0 23px",
  margin: "7px 0",
  wordWrap: "break-word",
});

export const ItemNameMini = style({
  fontFamily: '"Kanit"',
  fontWeight: 200,
  fontSize: "16px",
  color: "rgb(112, 112, 112)",
  padding: "0 0 0 17px",
  borderLeft: "6px solid #878ac4",
  borderBottom: "1px solid #878ac4",
});

export const ItemSpecMini = style({
  fontFamily: '"Kanit", "Noto Sans JP", sans-serif',
  fontWeight: 200,
  fontSize: "16px",
  padding: "0 0 0 23px",
  margin: "7px 0",
  wordWrap: "break-word",
});

export const BoothPrice = style({
  display: "grid",
  gap: "3% 5%",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
});

export const MdContents = style({
  fontFamily: '"Kanit", "Noto Sans JP", sans-serif',
  fontWeight: 200,
});
