import * as React from "react";
import { SVGProps } from "react";

const FrameLeftTop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M187.5 0 0 187.5V0h187.5Z"
      style={{
        fill: "#f4f4f6",
      }}
    />
    <path
      d="m93.75 187.5 93.75-93.75h1031.25L1312.5 0M93.75 93.75l187.5 187.5M1265.62 93.75 1359.37 0"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: "3.13px",
      }}
    />
  </svg>
);
export default FrameLeftTop;
