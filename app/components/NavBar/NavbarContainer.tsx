'use client';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';
import ProgressBar from './ProgressBar';

const NavbarContainer = () => {
  return (
    <div>
      <div className='flex border-b shadow-sm fixed bg-white z-50 w-full  '>
        <div className=' max-w-[1280px] flex  w-full m-auto h-[70px] items-center justify-between px-4 2 relative shadow-sm'>
          <NavbarBrand />
          <NavbarMenu />
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};

export default NavbarContainer;
