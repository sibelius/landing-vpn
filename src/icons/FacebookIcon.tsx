import * as React from 'react';
import { Svg } from '../ui/Svg';

const FacebookIcon = ({ size = 35, fill = '#fff', ...rest }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 35 35" fill="none" {...rest}>
      <path
        d="M16.8.58C7.521.58 0 8.103 0 17.38c0 9.28 7.521 16.8 16.8 16.8 9.278 0 16.8-7.52 16.8-16.8 0-9.278-7.522-16.8-16.8-16.8zm3.98 11.61h-2.526c-.299 0-.632.394-.632.917v1.824h3.16l-.479 2.6h-2.68v7.807h-2.98V17.53h-2.705v-2.6h2.704V13.4c0-2.194 1.523-3.978 3.612-3.978h2.525v2.767z"
        fill={fill}
      />
    </Svg>
  );
};

export default FacebookIcon;
