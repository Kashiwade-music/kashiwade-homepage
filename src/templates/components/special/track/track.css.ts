import { style, createVar } from "@vanilla-extract/css";

export const InnerWrapper = style({
  height: "100%",
  width: "100%",
  maxWidth: "1000px",
});

export const Inner = style({
  padding: "0 10px",
});

export const TrackItemWrapper = style({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
});

export const TrackItemGridParentWidth = createVar();

export const TrackItemGridParent = style({
  height: "60px",
  width: TrackItemGridParentWidth,
  display: "grid",
  gridTemplateColumns: "50px 1fr",
  gridTemplateRows: "4fr 1fr",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  padding: "0px 0px 15px 0px",
  "@media": {
    "screen and (max-width: 500px)": {
      height: "50px",
      gridTemplateColumns: "30px 1fr",
      width: "100%",
    },
  },
});

export const TrackNumberColor = createVar();
export const TrackTitleColor = createVar();
export const TrackSubInfoColor = createVar();

export const TrackNumber = style({
  gridArea: "1 / 1 / 2 / 2",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Zen Old Mincho",
  fontSize: "25px",
  fontWeight: "900",
  color: TrackNumberColor,
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "20px",
    },
  },
});

export const TrackTitle = style({
  gridArea: "1 / 2 / 2 / 3",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "flex-start",
  fontFamily: "Zen Old Mincho",
  fontSize: "25px",
  color: TrackTitleColor,
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "20px",
    },
  },
});

export const TrackSubInfo = style({
  gridArea: "2 / 2 / 3 / 3",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  fontFamily: "Zen Old Mincho",
  fontSize: "15px",
  color: TrackSubInfoColor,
  "@media": {
    "screen and (max-width: 500px)": {
      fontSize: "12px",
    },
  },
});
