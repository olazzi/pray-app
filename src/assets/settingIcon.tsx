import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"
const SettingIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      d="M12.906 0c.955 0 1.82.525 2.298 1.3.232.375.387.838.348 1.325-.025.375.09.75.297 1.1.659 1.062 2.117 1.462 3.253.863a2.684 2.684 0 0 1 3.628.95l.865 1.474a2.52 2.52 0 0 1-.956 3.538c-1.097.637-1.484 2.05-.826 3.125.207.337.439.625.8.8.452.238.8.613 1.046.988.478.775.439 1.725-.026 2.562l-.903 1.5c-.478.8-1.369 1.3-2.285 1.3-.452 0-.956-.125-1.369-.375-.335-.212-.723-.287-1.136-.287-1.277 0-2.349 1.037-2.388 2.274 0 1.438-1.187 2.563-2.672 2.563h-1.756c-1.497 0-2.685-1.125-2.685-2.563-.025-1.237-1.097-2.274-2.375-2.274-.426 0-.813.075-1.136.287-.413.25-.93.375-1.368.375-.93 0-1.82-.5-2.298-1.3l-.89-1.5c-.478-.813-.504-1.787-.026-2.562.206-.375.593-.75 1.032-.988.362-.175.594-.463.814-.8.645-1.075.258-2.488-.84-3.125a2.54 2.54 0 0 1-.955-3.538l.865-1.474a2.7 2.7 0 0 1 3.64-.95c1.124.6 2.582.2 3.24-.863.207-.35.323-.725.297-1.1-.025-.487.117-.95.362-1.325A2.778 2.778 0 0 1 11.086 0h1.82Zm-.89 8.975c-2.027 0-3.667 1.575-3.667 3.537 0 1.963 1.64 3.526 3.666 3.526 2.027 0 3.628-1.563 3.628-3.526 0-1.962-1.601-3.537-3.628-3.537Z"
    />
  </Svg>
)
export default SettingIcon;