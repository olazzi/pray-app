import React from "react";
import { Svg, Path } from "react-native-svg";

interface PlusIconProps {
  width: number;
  height: number;
  color?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 238 238" fill="none">
    <Path
      d="M119 0V238"
      stroke={color || "#000"}
      strokeWidth={26}
      strokeLinecap="round"
    />
    <Path
      d="M0 119H238"
      stroke={color || "#000"}
      strokeWidth={26}
      strokeLinecap="round"
    />
  </Svg>
);

export default PlusIcon;
