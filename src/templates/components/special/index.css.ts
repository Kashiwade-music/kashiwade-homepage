import { keyframes, style } from "@vanilla-extract/css";

const BlurTransition = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const Contents = style({
  animation: `${BlurTransition} 1s cubic-bezier(0.55, 0.06, 0.68, 0.19) 3.0s 1 normal forwards`,
});
