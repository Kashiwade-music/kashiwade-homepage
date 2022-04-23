import { style } from "@vanilla-extract/css";

export const CenterH1 = style({
  textAlign: "center",
  fontFamily: '"Noto Sans JP", sans-serif',
  fontWeight: 300,
  marginBottom: "2em",
});

export const UlContent = style({
  listStyleType: '"・"',
  paddingLeft: "10px",
});

export const ProfileContainer = style({
  display: "grid",
  gap: "3% 3%",
  gridTemplateColumns: "30% 1fr",
  gridTemplateRows: "auto",
  marginBottom: "3em",
});

export const ProfileContainerMini = style({
  display: "grid",
  gap: "3% 3%",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridTemplateRows: "auto",
  marginBottom: "2em",
});

export const DetailsContainer = style({
  display: "grid",
  gap: "3% 3%",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gridTemplateRows: "auto",
  marginBottom: "3em",
});

export const ItemName = style({
  fontFamily: '"Kanit"',
  fontWeight: 200,
  fontSize: "20px",
  color: "rgb(112, 112, 112)",
  padding: "0 0 0 17px",
  borderLeft: "6px solid #f4bfd6",
  borderBottom: "1px solid #f4bfd6",
});

export const ItemSpec = style({
  fontFamily: '"Noto Sans JP", sans-serif',
  fontWeight: 200,
  fontSize: "16px",
  padding: "0 0 0 23px",
  margin: "7px 0",
  wordWrap: "break-word",
});
