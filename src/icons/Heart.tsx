import * as React from "react";
import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    viewBox="0 0 20 21"
    {...props}
  >
    <path
      fill="#405EFF"
      stroke="#405EFF"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m10 19-1.305-1.295C4.06 13.125 1 10.103 1 6.395 1 3.374 3.178 1 5.95 1c1.566 0 3.069.795 4.05 2.05a5.517 5.517 0 0 1 1.827-1.507A4.981 4.981 0 0 1 14.05 1C16.822 1 19 3.374 19 6.395c0 3.708-3.06 6.73-7.695 11.32z"
    />
  </svg>
);
export default SvgHeart;
