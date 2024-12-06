'use client';
import Image from 'next/image';

const NavbarBrand = () => {
  return (
    <div>
      <Image
        src={'/next.svg'}
        alt='Logo Thiago Dev Full Stack'
        width={120}
        height={40}
        className='cursor-pointer hover:opacity-90 '
      />
    </div>
  );
};

export default NavbarBrand;
