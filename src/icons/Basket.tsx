import * as React from "react";
import type { SVGProps } from "react";
const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={14}
    viewBox="0 0 12 14"
    fill='currentColor'
    {...props}
  >
    <path
      d="M11.143 1.286H8.57L7.837.57H4.163l-.734.715H.857v1.428h10.286M1.592 12c0 .379.155.742.43 1.01.276.268.65.419 1.04.419h5.877c.39 0 .763-.15 1.039-.419.275-.268.43-.631.43-1.01V3.429H1.592V12"
    />
  </svg>
);
export default SvgBasket;
