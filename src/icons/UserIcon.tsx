import * as React from "react";

const UserIcon = ({ size = 25, fill = '#F53838', ...props}) => {
  return (
    <svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 11.35a3.6 3.6 0 100-7.201 3.6 3.6 0 000 7.2zm-5.101 10.8c-1.822 0-3.357-1.532-2.66-3.215a8.4 8.4 0 0115.522 0c.697 1.683-.838 3.214-2.66 3.214H7.4z"
        fill={fill}
      />
    </svg>
  );
}

export default UserIcon;
