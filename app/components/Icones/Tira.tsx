import React from 'react';

const Tira = ({ color = 'rgba(52, 126, 200, 1)', rotation = 0 }) => (
  <svg
    id='wave'
    style={{
      transform: `rotate(${rotation}deg)`,
    }}
    viewBox='0 0 1440 100'
    xmlns='http://www.w3.org/2000/svg'>
    <defs>
      <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
        <stop stopColor={color} offset='0%' />
        <stop stopColor={color} offset='100%' />
      </linearGradient>
    </defs>
    <path
      style={{ transform: 'translate(0, 0px)', opacity: 1 }}
      fill='url(#sw-gradient-0)'
      d='M0,30L80,38.3C160,47,320,63,480,58.3C640,53,800,27,960,20C1120,13,1280,27,1440,38.3L1440,100L0,100Z'
    />
  </svg>
);

export default Tira;
