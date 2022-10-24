import React from 'react';

function RightArrow({ width = 24, height = 24, color = '#B5BAB9', ...rest }) {
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
        cx="15"
        cy="15"
        r="15"
        fill={color}
        opacity="0.1"
        transform="rotate(180 15 15)"
      />
      <path
        fill="#384641"
        d="M12.293 20.293a1 1 0 001.414 1.414l6-6a1 1 0 00.03-1.383l-5.5-6a1 1 0 00-1.474 1.352l4.853 5.294-5.323 5.323z"
      />
    </svg>
  );
}

export default RightArrow;
