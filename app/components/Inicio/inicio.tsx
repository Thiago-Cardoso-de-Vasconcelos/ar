'use client';
import React, { useEffect, useState } from 'react';
import Setas from '../Icones/setas';
import Whats from '../Icones/whats';
import Image from 'next/image';
import IconMapa from '../Icones/IconeMapa';
import Carousel from './carousel';

export default function Inicio() {
  const [tamanho, setTamanho] = useState(70);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        setTamanho(50);
      }
      if (window.innerWidth <= 320) {
        setTamanho(0);
      } else {
        setTamanho(70);
      }
    }
  }, []);

  return (
    <div className=' m-auto w-full  px-2 xl:px-0  flex flex-col lg:w-[1024px]  xl:w-[1280px] '>
      <div className='flex flex-col md:flex-row justify-center items-center  '>
        <div className=' flex justify-center items-center sm:items-start flex-col  sm:w-[50%] '>
          <div
            className=' w-fit  my-5 sm:mt-5  space-y-2 relative 
        '>
            <p className='text-4xl cel_m:text-5xl lg:text-6xl xl:text-7xl font-extrabold'>
              INSTALAÇÃO
            </p>
            <p className='text-4xl cel_m:text-5xl md:text-5xl lg:text-6xl xl:text-7xl  font-extrabold text-blue-500'>
              HIGIENIZAÇÃO
            </p>

            <div className='h-2 w-full lg:h-3  bg-blue-500 absolute -bottom-1 md:-bottom-2 z-0'></div>
            <div className='h-2 lg:h-3 w-4 cel_m:w-5 xl:w-7 bg-white absolute -bottom-1 md:-bottom-2 z-10 left-[190px] cel_m:left-[254px] lg:left-[320px] xl:left-[382px]'></div>

            <p className='text-4xl cel_m:text-5xl  lg:text-6xl xl:text-7xl font-extrabold z-20 relative'>
              MANUTENÇÃO
            </p>
          </div>
          <p className=' w-full cel_p:text-sm text-center sm:text-start   md:py-3 lg:py-5 font-light md:text-sm  lg:text-base xl:text-xl xl:w-[550px] '>
            Mais de 8 anos de excelência em refrigeração! Profissionais de
            confiança, qualidade garantida e o melhor custo-benefício. Agende
            sua instalação com quem entende do assunto!
          </p>

          <div className='flex items-center justify-center lg:justify-start space-x-3 w-full  my-2  sm:mt-0 '>
            <div className='hidden cel_g:flex'>
              <Setas size={tamanho} color1='#347EC8' direction='right' />
            </div>

            <button
              onClick={() =>
                window.open(
                  'https://wa.me/5551982686763?text=Olá!%20Tenho%20interesse%20em%20seus%20serviços.',
                  '_blank',
                )
              }
              className='mx-2 text-xl lg:mx-5 flex gap-2 px-2 py-1 lg:px-4  lg:py-2  md:text-base lg:text-xl  items-center rounded-md border-2 hover:scale-105 border-black  shadow-[2px_2px_0px_#000000] font-semibold'>
              Fazer orçamento
              <Whats size={30} />
            </button>
            <div className='hidden cel_g:flex'>
              <Setas size={tamanho} color1='#347EC8' direction='left' />
            </div>
          </div>
        </div>

        <div className='sm:w-[50%]  relative  '>
          <div className='flex items-end justify-end md:w-[380px] md:h-[354px] lg:w-[500px] lg:h-[404px] xl:w-[638px] xl:h-[490px] relative  '>
            <Image
              alt='imagem-ar'
              src='/banner-pc.jpg'
              layout='fill' // A imagem vai preencher o contêiner
              objectFit='contain' // Ajusta a imagem para caber completamente na div
              objectPosition='top right' // Posiciona a imagem no canto inferior direito
            />
          </div>
          <div className='flex m-auto my-3 cel_p:w-[300px] cel_m:w-[350px] cel_g:w-[410px] cel_g:my-6 h-36 md:hidden relative'>
            <Image
              alt='imagem-ar'
              src='/ar-banner.jpg'
              layout='fill' // A imagem vai preencher o contêiner
              objectFit='cover' // Ajusta a imagem para caber completamente na div
              objectPosition='center' // Posiciona a imagem no canto inferior direito
            />
          </div>
        </div>
      </div>

      <div className=' flex flex-col sm:flex-row justify-between items-center  h-[240px] cel_m:h-[260px] sm:h-[110px] lg:h-[160px] '>
        <div className='w-[300px] md:w-[380px] lg:ml-1 mt-2 md:mt-12 lg:mt-4  xl:scale-110 xl:mt-0  '>
          <div className='flex items-end space-x-2 m-auto  w-fit'>
            <IconMapa size={40} />
            <p className='text-2xl text-end pp:text-2xl lg:text-3xl font-bold'>
              Áreas de atuação
            </p>
          </div>
          <div className='flex justify-center gap-2 mt-2 md:mt-5  m-auto  text-xs cel_m:text-sm sm:text-base'>
            <div className='rounded-lg  bg-blue-500 px-4 md:px-2 py-2 w-fit text-white text-center whitespace-nowrap text-ellipsis '>
              Porto Alegre
            </div>
            <div className='rounded-lg  bg-blue-500 px-4 md:px-2 py-2 w-fit text-white text-center whitespace-nowrap text-ellipsis'>
              Grande Poa
            </div>
            <div className='rounded-lg  bg-blue-500 px-4 md:px-2 py-2 w-fit text-white text-center whitespace-nowrap text-ellipsis '>
              Litoral
            </div>
          </div>
        </div>

        <div className='bg-blue-500 w-full cel_m:mt-6 md:mt-12 md:w-[400px] lg:w-[590px] xl:w-[800px] h-[130px]  lg:mt-2  px-3 rounded-md flex items-center justify-center   overflow-hidden'>
          <Carousel />
        </div>
      </div>
    </div>
  );
}
