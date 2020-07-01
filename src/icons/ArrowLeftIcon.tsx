import * as React from 'react';
import { Svg } from '../ui/Svg';

function ArrowLeftIcon({ size = 30, fill = '#F53838', ...rest }) {
  return (
    <Svg width={30} height={31} viewBox="0 0 30 31" fill="none" {...rest}>
      <path
        d="M23.75 14.003H8.925l4.537-5.45a1.251 1.251 0 10-1.925-1.6l-6.25 7.5c-.042.06-.08.122-.112.187 0 .063 0 .1-.087.163a1.25 1.25 0 00-.088.45c.001.154.03.306.088.45 0 .062 0 .1.087.162.033.066.07.128.112.188l6.25 7.5a1.248 1.248 0 00.963.45 1.25 1.25 0 00.963-2.05l-4.538-5.45H23.75a1.25 1.25 0 000-2.5z"
        fill="#F53838"
      />
    </Svg>
  );
}

export default ArrowLeftIcon;
