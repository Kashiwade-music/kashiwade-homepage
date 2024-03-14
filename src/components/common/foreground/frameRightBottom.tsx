import * as React from "react";
import { SVGProps } from "react";

const FrameRightBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    viewBox="0 0 1361 285"
    {...props}
  >
    <path
      d="m1173.44 284.375 187.5-187.5v187.5h-187.5Z"
      style={{
        fill: "#f4f4f6",
      }}
    />
    <path
      d="m1267.19 96.875-93.75 93.75H142.19l-93.75 93.75M1267.19 190.625l-187.5-187.5M95.313 190.625l-93.75 93.75"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: "3.13px",
      }}
    />
  </svg>
);
export default FrameRightBottom;
