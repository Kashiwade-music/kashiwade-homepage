import * as React from "react";
import { SVGProps } from "react";

// https://react-svgr.com/playground/
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <circle
      cx={354.1}
      cy={90.48}
      r={50.59}
      style={{
        fill: "#fff", // #96d04a
      }}
    />
    <path
      d="M156.36 439c-56.98-48.07-64.4-133.46-17.02-191.04 2.773-3.36 7.337-8.22 13.69-14.58 34.287-34.333 68.593-68.647 102.92-102.94 17.6-17.58 47.44-14.7 61.85 5.15 9.76 13.46 10.72 31.31 2.05 45.53-1.98 3.233-6.35 8.237-13.11 15.01a163198.038 163198.038 0 0 1-96.69 96.67c-5.147 5.14-8.807 9.433-10.98 12.88-11.52 18.25-11.47 41.42.53 59.51 24.32 36.64 82.83 29.35 96.05-13.94 6.18-20.25.75-40.3-14.06-55.59-15.86-16.38-13.98-42.8 2.17-58.2 13.77-13.13 36.73-14.55 52.07-3.16 3.8 2.82 8.443 7.58 13.93 14.28 23.79 29.02 34.36 66.74 29.59 104.06C365.76 459.12 238.7 508.46 156.36 439Z"
      style={{
        fill: "#fff",
        fillRule: "nonzero",
      }}
    />
  </svg>
);

export default SvgComponent;
