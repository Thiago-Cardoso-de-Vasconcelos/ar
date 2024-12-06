import React from 'react';

const IconeCheck = ({ color = '#347ec8', size = 50 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
      width={size}
      height={size}>
      <defs>
        <style>
          {`
            .cls-1 { fill: ${color}; }
            .cls-2 { fill: #fff; }
          `}
        </style>
      </defs>
      <title>iconeCheck</title>
      <circle
        className='cls-1'
        cx='25'
        cy='25'
        r='24'
        transform='translate(-7.66 38.53) rotate(-67.5)'
      />
      <polygon
        className='cls-2'
        points='36.29 13.45 20.09 29.64 13.68 23.23 9.22 27.69 20.09 38.56 40.74 17.91 36.29 13.45'
      />
    </svg>
  );
};

export default IconeCheck;
