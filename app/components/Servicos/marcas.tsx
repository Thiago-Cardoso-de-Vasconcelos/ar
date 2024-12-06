'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Estilos do autoplay (opcional)
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Marcas() {
  const marcas = [
    { src: '/marcas/electrolux.svg', alt: 'Electrolux' },
    { src: '/marcas/brastemp.svg', alt: 'Brastemp' },
    { src: '/marcas/carrier.svg', alt: 'Carrier' },
    { src: '/marcas/consul.svg', alt: 'Consul' },
    { src: '/marcas/fujitsu.svg', alt: 'Fujitsu' },
    { src: '/marcas/gree.svg', alt: 'Gree' },
    { src: '/marcas/lg.svg', alt: 'Lg' },
    { src: '/marcas/midea.svg', alt: 'Midea' },
    { src: '/marcas/panasonic.svg', alt: 'Panasonic' },
    { src: '/marcas/philco.svg', alt: 'Philco' },
    { src: '/marcas/samsung.svg', alt: 'Samsung' },
  ];

  return (
    <div className='mt-5  max-w-[1280px] m-auto'>
      <h3 className='text-center font-bold text-blue-500 text-xl'>
        Atemdemos todas as marcas
      </h3>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // Tempo entre cada slide (em milissegundos)
          disableOnInteraction: false, // Continua passando mesmo após interação
        }}
        breakpoints={{
          // Adjust breakpoints to fit your specific needs
          0: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 1,
          },
          1280: {
            slidesPerView: 8,
            spaceBetween: 1,
          },
        }}>
        {marcas.map((marca, index) => (
          <SwiperSlide key={index}>
            <div className='w-[100%] h-[90px] my-auto flex items-center justify-center'>
              <Image src={marca.src} width={100} height={100} alt={marca.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
