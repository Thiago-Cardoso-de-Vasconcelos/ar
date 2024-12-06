'use client';

import { useEffect, useState } from 'react';

const ProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scroll = (scrollTop / windowHeight) * 100;
    setScrollPercentage(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-[0px] left-0 w-full z-50'>
      <div
        className='h-[2px] bg-black'
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
