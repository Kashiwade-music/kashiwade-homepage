import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 33 33"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    {...props}
  >
    <path
      d="M0-7.427v-2.484l-6.21-9.935h-2.145l-3.387 8.128-3.331-6.997-1.864-.003-5.643 13.323V-18.04h-3.84v1.118h-2.934v3.895h2.934v11.245c0 .997.81 1.806 1.808 1.806h1.919v12.395l3.917-.002.001-5.611c0-3.109 2.69-5.631 6.017-5.652h.046c5.441.003 9.852 4.12 9.852 9.197v2.068H0V1.299h2.935v-6.147L0-7.427Z"
      style={{
        fill: "#fff",
        fillRule: "nonzero",
      }}
      transform="translate(29.354 19.846)"
    />
  </svg>
);

export default SvgComponent;
