'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Estilos do autoplay (opcional)
import { Autoplay } from 'swiper/modules';

export default function Carousel() {
  return (
    <Swiper
      className='flex  items-center justify-between  '
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, // Tempo entre cada slide (em milissegundos)
        disableOnInteraction: false, // Continua passando mesmo após interação
      }}
      breakpoints={{
        // Adjust breakpoints to fit your specific needs
        0: {
          slidesPerView: 2,
          spaceBetween: 1,
        },
        350: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 1,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 1,
        },
      }}>
      <SwiperSlide className=' flex justify-center items-center '>
        <div className='w-[90%] h-[100px] m-auto rounded-md bg-white flex flex-col items-center text-center'>
          <p className='font-bold text-2xl sm:text-xl lg:text-2xl    text-blue-500 mt-2'>
            +5 mil
          </p>
          <p className=' text-sm sm:text-base'>
            unidades
            <br />
            instaladas
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <div className='w-[90%]  h-[100px] m-auto rounded-md bg-white flex flex-col items-center text-center'>
          <p className='font-bold text-2xl sm:text-xl lg:text-2xl  text-blue-500 mt-2'>
            +2 mil
          </p>
          <p className=' text-sm sm:text-base'>
            unidades
            <br />
            higeinizadas
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className=' flex justify-center items-center'>
        <div className='w-[90%]  h-[100px] m-auto rounded-md bg-white flex flex-col items-center text-center'>
          <p className='font-bold text-2xl sm:text-xllg:text-2xl  text-blue-500 mt-2'>
            +3 mil
          </p>
          <p className=' text-sm sm:text-base'>
            unidades
            <br />
            concertadas
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className=' flex justify-center items-center'>
        <div className='w-[90%]  h-[100px] m-auto rounded-md bg-white flex flex-col items-center text-center'>
          <p className='font-bold text-2xl sm:text-xl lg:text-2xl  text-blue-500 mt-2'>
            +8 anos
          </p>
          <p className=' text-sm sm:text-base'>
            nesse
            <br />
            mercado
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className=' flex justify-center items-center'>
        <div className='w-[90%]  h-[100px] m-auto rounded-md bg-white flex flex-col items-center text-center'>
          <p className='font-bold text-2xl sm:text-xl lg:text-2xl  text-blue-500 mt-2'>
            99%
          </p>
          <p className=' text-sm sm:text-base'>
            dos clientes
            <br />
            satisfeitos
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
