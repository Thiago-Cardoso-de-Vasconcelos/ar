'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

const NavbarMenu = () => {
  const links = [
    { href: '#', text: 'Inicio' },
    { href: '#servico', text: 'Serviços' },
    { href: '#depoimentos', text: 'Depoimentos' },
    { href: '#duvidasFrequentes', text: 'Perguntas Frequentes' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false); // Fecha o menu
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Remove o listener quando o componente desmontar
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div ref={menuRef} className='flex items-center '>
      <nav>
        {/* Menu Hambúrguer */}
        <div className='md:hidden px-4'>
          <button
            onClick={toggleMenu}
            type='button'
            className='text-black focus:outline-none'>
            <svg
              className='w-7 h-7'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Menu Links com Transição */}
        <ul
          className={`flex flex-col absolute top-[70px] -right-1 bg-gray-950 text-white py-5 gap-5 px-5 md:hidden 
          transition-transform duration-500 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } rounded-bl-lg`}>
          {links.map((link, index) => (
            <li key={index} className='mr-5'>
              <a
                onClick={toggleMenu}
                className="hover:text-white font-medium whitespace-nowrap relative after:content-[''] after:block after:absolute after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:h-0.5 m-0.5"
                href={link.href}>
                {link.text}
              </a>
            </li>
          ))}

          {/* Botão de Orçamento */}
          <Link
            href='https://wa.me/5551982686763?text=Olá!%20Tenho%20interesse%20em%20seus%20serviços.'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-md bg-green-500 w-[140px] flex items-center justify-around px-2 py-1 text-white font-semibold cursor-pointer hover:scale-105 hover:bg-green-600'>
            <p>Orçamento</p>
            <Image src={'/icon-whats.png'} alt='Whats' width={20} height={20} />
          </Link>
        </ul>

        {/* Menu para Tela Grande */}
        <ul className='hidden md:flex items-center'>
          {links.map((link, index) => (
            <li key={index} className=' md:mr-2 lg:mr-5'>
              <a
                className="hover:text-gray-900 font-medium  whitespace-nowrap relative after:content-[''] after:block after:absolute after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:h-0.5 m-0.5"
                href={link.href}>
                {link.text}
              </a>
            </li>
          ))}

          {/* Botão de Orçamento */}
          <button
            onClick={() => {
              window.open(
                'https://wa.me/5551982686763?text=Olá!%20Tenho%20interesse%20em%20seus%20serviços.',
                '_blank',
              );
            }}
            className='rounded-md bg-green-500 w-[140px] flex items-center justify-around px-2 py-1 text-white font-semibold cursor-pointer hover:scale-105 hover:bg-green-600'>
            <p>Orçamento</p>
            <Image src={'/icon-whats.png'} alt='Whats' width={20} height={20} />
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMenu;
