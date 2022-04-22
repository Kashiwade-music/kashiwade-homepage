import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 439 77"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    {...props}
  >
    <use
      xlinkHref="#a"
      x={2}
      y={1}
      width={436.487}
      height={75.231}
      transform="scale(.99883 .98989)"
    />
    <defs>
      <image
        id="a"
        width={437}
        height={76}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default SvgComponent;
