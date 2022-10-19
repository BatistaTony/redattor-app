import React from 'react';

const IconSort = ({ width = 24, height = 24, color = '#7A7D82' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <g clipPath="url(#clip0_182_414)">
      <path fill={color} d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
    </g>
    <defs>
      <clipPath id="clip0_182_414">
        <path fill="#fff" d="M0 0H24V24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default IconSort;
