import React from 'react';

const IconLayout = ({ width = 24, height = 24, color = '#7A7D82' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M19 5v2h-4V5h4zM9 5v6H5V5h4zm10 8v6h-4v-6h4zM9 17v2H5v-2h4zM21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"
    />
  </svg>
);

export default IconLayout;
