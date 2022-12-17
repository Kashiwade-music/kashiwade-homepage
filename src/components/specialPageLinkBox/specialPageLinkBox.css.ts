import { style, createVar } from "@vanilla-extract/css";

export const SpecialPageLinkBoxParent = style({
  width: "100%",
  height: "150px",
  border: "1px solid #ddd",
  position: "relative",
  "@media": {
    "screen and (max-width: 500px)": {
      height: "125px",
    },
  },
});

export const TextColor = createVar();
export const TextParent = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: "10",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.5s",
  color: TextColor,
  opacity: 0,
  ":hover": {
    opacity: 1,
  },
});

export const TextTitle = style({
  fontFamily: "Zen Old Mincho",
  fontSize: "32px",
  margin: "0 0 2vh 0",
  textAlign: "center",
  "@media": {
    "screen and (max-width: 560px)": {
      fontSize: "24px",
    },
    "screen and (max-width: 300px)": {
      fontSize: "20px",
    },
  },
});

export const TextDescription = style({
  fontFamily: "Zen Old Mincho",
  textAlign: "center",
  fontSize: "16px",
  "@media": {
    "screen and (max-width: 560px)": {
      fontSize: "14px",
      margin: "0 5px",
    },
  },
});

export const ImageFilter = createVar();
export const OverlayColor = createVar();
export const OverlayOpacity = createVar();

export const BackgroundOverLay = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: "3",
  transition: "all 0.4s",
  opacity: OverlayOpacity,
  background: OverlayColor,
});

export const BackgroundWrapper = style({
  width: "100%",
  height: "100%",

  overflow: "hidden",
  position: "relative",
  zIndex: "2",
  transition: "all 0.4s",
  filter: ImageFilter,
});

export const LogoImagePositioner = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "40%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 500px)": {
      width: "55%",
    },
  },
});

export const LogoImage = style({
  maxHeight: "150px",
  width: "100%",
  zIndex: "1",
  "@media": {
    "screen and (max-width: 500px)": {
      maxHeight: "125px",
    },
  },
});

export const Background = style({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  minHeight: "calc(150px * 2)",
  width: "100%",
  zIndex: "0",
  transform: "translateY(-25%)",
  "@media": {
    "screen and (max-width: 500px)": {
      minHeight: "calc(125px * 2)",
    },
    "screen and (max-width: 300px)": {
      minHeight: "calc(100px * 2)",
    },
  },
});

export const Image = style({
  width: "100%",
});

export const Title = style({
  gridArea: "1 / 2 / 2 / 3",
});

export const Description = style({
  gridArea: "2 / 2 / 3 / 3",
});
