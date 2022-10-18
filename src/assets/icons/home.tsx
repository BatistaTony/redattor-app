import React from 'react';

const IconHome = ({ width = 24, height = 24, color = '#7A7D82' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12 6.19l5 4.5v7.81h-2v-6H9v6H7v-7.81l5-4.5zm0-2.69l-10 9h3v8h6v-6h2v6h6v-8h3l-10-9z"
    />
  </svg>
);

export default IconHome;
