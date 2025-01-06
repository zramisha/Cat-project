import React from 'react';

const SadCatIcon = () => {
  return (
    <div className='items-center justify-center self-center'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 text-error"
      >
        <circle cx="32" cy="32" r="30" stroke="#000" fill="#f3f3f3" />

        <circle cx="22" cy="26" r="4" fill="#000" />

        <circle cx="42" cy="26" r="4" fill="#000" />

        <path d="M24 40c4 4 12 4 16 0" stroke="#000" />

        <path d="M18 10 L26 18 L22 22 Z" fill="#f3f3f3" stroke="#000" />

        <path d="M46 10 L38 18 L42 22 Z" fill="#f3f3f3" stroke="#000" />

        <line x1="12" y1="30" x2="20" y2="28" stroke="#000" />
        <line x1="12" y1="34" x2="20" y2="36" stroke="#000" />
        <line x1="52" y1="30" x2="44" y2="28" stroke="#000" />
        <line x1="52" y1="34" x2="44" y2="36" stroke="#000" />
      </svg>

    </div>
  );
};

export default SadCatIcon;