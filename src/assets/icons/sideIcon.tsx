import React from 'react';

function SideIcon({ width = 24, height = 24, color = '#6A6CF6', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
    >
      <circle
        cx="16"
        cy="16"
        r="13.5"
        fill={color}
        stroke="#F5F5F9"
        strokeWidth="5"
      />
      <g clipPath="url(#clip0_182_388)">
        <path
          fill="#fff"
          d="M17.921 11.259l-.959-.96-5.362 5.363 5.362 5.363.96-.959-4.405-4.404 4.404-4.403z"
        />
      </g>
      <defs>
        <clipPath id="clip0_182_388">
          <path fill="#fff" d="M0 0H13V13H0z" transform="translate(9 9)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SideIcon;
