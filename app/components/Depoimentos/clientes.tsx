'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Estilos do autoplay (opcional)
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Clientes() {
  const clientes = [
    { src: '/clientes/acainhado.jpg', alt: 'cliente' },
    { src: '/clientes/amor na panela.jpg', alt: 'cliente' },
    { src: '/clientes/bioseta.jpg', alt: 'cliente' },
    { src: '/clientes/multfer.jpg', alt: 'cliente' },
    { src: '/clientes/hs.jpg', alt: 'cliente' },
    { src: '/clientes/metrofile.jpg', alt: 'cliente' },
    { src: '/clientes/pinteigamei.jpg', alt: 'cliente' },
    { src: '/clientes/RAFASUSHI.jpg', alt: 'cliente' },
    { src: '/clientes/saft.jpg', alt: 'cliente' },
    { src: '/clientes/sd15store.jpg', alt: 'cliente' },
    { src: '/clientes/spettaria.jpg', alt: 'cliente' },
    { src: '/clientes/subway.jpg', alt: 'cliente' },
  ];

  return (
    <div className='mt-16 '>
      <h3 className='text-center font-bold text-blue-500 text-xl px-5'>
        Veja alguns de nossos clientes
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
        {clientes.map((marca, index) => (
          <SwiperSlide key={index}>
            <div className='w-[100%] h-[110px] my-auto flex gap-6 items-center justify-center'>
              <Image src={marca.src} width={100} height={100} alt={marca.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
