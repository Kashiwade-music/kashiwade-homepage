import { style } from "@vanilla-extract/css";

export const SectionWrapper = style({
  height: "100%",
  width: "100%",
  top: "0",
  position: "fixed",
  zIndex: 0,
  display: "grid",
  gridTemplateColumns: "300px 1fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "0px",
  gridRowGap: "0px",
});

export const SectionMain = style({
  gridArea: "1 / 2 / 2 / 3",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  color: "white",
  fontSize: "100px",
  backgroundColor: "rgba(0, 83, 123, 0.5)",
});
