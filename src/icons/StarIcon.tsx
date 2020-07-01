import * as React from 'react';
import { Svg } from '../ui/Svg';

function StarIcon({ size = 16, fill = '#FEA250', ...rest }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" {...rest}>
      <path
        d="M14.19 6.418l-3.968-.577-1.774-3.595a.502.502 0 00-.897 0L5.779 5.841l-3.967.577a.5.5 0 00-.277.853l2.87 2.799-.677 3.951a.5.5 0 00.725.527L8 12.682l3.548 1.866a.5.5 0 00.725-.527l-.678-3.951 2.87-2.799a.499.499 0 00-.276-.853z"
        fill="#FEA250"
      />
    </Svg>
  );
}

export default StarIcon;
