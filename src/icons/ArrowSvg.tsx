import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={11}
    fill="none"
    viewBox="0 0 10 11"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#405EFF"
        d="M3.854 1.647A.5.5 0 0 0 3 2v7.172a.5.5 0 0 0 .854.353L7.439 5.94a.5.5 0 0 0 0-.708L3.854 1.648v-.001Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h10v10H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsvg;
