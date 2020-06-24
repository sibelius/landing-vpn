import * as React from "react";

const ServerIcon = ({ size = 25, fill = '#F53838', ...props }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M20.5 3.55h-16a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2zm-5 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm1 6h-16a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2zm-5 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z"
        fill={fill}
      />
    </svg>
  );
}

export default ServerIcon;
