import * as React from "react";
import { Svg } from '../ui/Svg';

const LocationIcon = ({ size = 25, fill = '#F53838', ...props}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M19 9.55A7.002 7.002 0 007.05 4.6 7 7 0 005 9.55c0 1.386.41 2.676 1.105 3.764h-.008C8.457 17.01 12 22.55 12 22.55l5.903-9.235h-.007A6.98 6.98 0 0019 9.55zm-7 3a3 3 0 110-6.001 3 3 0 010 6z"
        fill={fill}
      />
    </Svg>
  );
}

export default LocationIcon;
