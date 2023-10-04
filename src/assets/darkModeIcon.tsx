import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const DarkModeIcon = (props: SvgProps) => (
  <Svg width={800} height={800} viewBox="0 0 24 24" {...props}>
    <Path
      fill={props.color}
      d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"
    />
  </Svg>
);

export default DarkModeIcon;
