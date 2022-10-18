import React from 'react';

const IconLogout = ({ width = 24, height = 24, color = '#7A7D82' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M7 16l1.41-1.41L6.83 13H15v-2H6.83l1.58-1.58L7 8l-4 4 4 4zm12 3h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-7v2h7v14z"
    />
  </svg>
);

export default IconLogout;
