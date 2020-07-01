import * as React from 'react';
import { Svg } from '../ui/Svg';

function ArrowRightIcon({ size = 30, fill = '#fff', ...rest }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none" {...rest}>
      <path
        d="M6.25 14.003h14.825l-4.537-5.45a1.251 1.251 0 111.924-1.6l6.25 7.5c.043.06.08.122.113.187 0 .063 0 .1.088.163.056.143.086.296.087.45a1.25 1.25 0 01-.087.45c0 .062 0 .1-.088.162-.033.066-.07.128-.113.188l-6.25 7.5a1.248 1.248 0 01-.962.45 1.25 1.25 0 01-.962-2.05l4.537-5.45H6.25a1.25 1.25 0 010-2.5z"
        fill={fill}
      />
    </Svg>
  );
}

export default ArrowRightIcon;
