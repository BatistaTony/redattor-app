import React from 'react';

const IconReport = ({ width = 24, height = 24, color = '#7A7D82' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
    />
    <path
      fill={color}
      d="M9 12H7v5h2v-5zM17 7h-2v10h2V7zM13 14h-2v3h2v-3zM13 10h-2v2h2v-2z"
    />
  </svg>
);

export default IconReport;
