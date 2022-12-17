import { style, createVar } from "@vanilla-extract/css";

export const ParallaxHeight = createVar();
export const ParallaxTextColor = createVar();
export const ParallaxOverlayColor = createVar();
export const ParallaxOverlayOpacity = createVar();
export const ParallaxMinHeight = createVar();
export const ParallaxMinWidth = createVar();
export const ParallaxImageFilter = createVar();

export const ParallaxParent = style({
  height: ParallaxHeight,
  width: "100%",
  overflow: "hidden",
  perspective: "1px",
  position: "relative",
  background: "linear-gradient(180deg, #000000 0%, #000000 100%)",
});

export const ParallaxFront = style({
  height: "100%",
  width: "100%",
  position: "absolute",
  color: ParallaxTextColor,
  boxShadow: `inset 0px 7px 7px 0px rgb(0 0 0 / 21%),
  inset 0px -7px 7px 0px rgb(0 0 0 / 21%)
  `,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  "::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: ParallaxOverlayColor,
    opacity: ParallaxOverlayOpacity,
    zIndex: -1,
  },
});

export const ParallaxBack = style({
  zIndex: -1,
  minHeight: ParallaxMinHeight,
  filter: ParallaxImageFilter,
});

export const ParallaxBackEnableTranslateX = style({
  zIndex: -1,
  minHeight: ParallaxMinHeight,
  minWidth: ParallaxMinWidth,
  filter: ParallaxImageFilter,
});
