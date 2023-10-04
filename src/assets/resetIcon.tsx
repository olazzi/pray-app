import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ResetIcon = (props: SvgProps) => (
  <Svg width={100} height={100} viewBox="-3 -5 21 21" {...props}>
    <Path
      d="m1.378 1.376 4.243.003v4.242"
      fill="none"
      stroke={props.color || "#FFFFFFFF"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="matrix(-.70710678 .70710678 .70710678 .70710678 3.500179 -1.449821)"
    />
    <Path
      d="m5.5 9.49998326h5c2 .00089417 3-.99910025 3-2.99998326s-1-3.00088859-3-3.00001674h-10"
      fill="none"
      stroke={props.color || "#FFFFFFFF"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ResetIcon;
