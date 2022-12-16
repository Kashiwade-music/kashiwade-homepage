import { keyframes, style, createVar } from "@vanilla-extract/css";

const BlurTransition = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const Contents = style({
  animation: `${BlurTransition} 1s cubic-bezier(0.55, 0.06, 0.68, 0.19) 3.0s 1 normal forwards`,
});

export const Poem = style({
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

export const Description = style({
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

export const NewsDate = style({
  padding: "0 10px",
});

export const NewsContents = style({
  padding: "0 10px",
});
