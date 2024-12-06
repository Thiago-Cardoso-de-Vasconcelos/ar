'use client';
import { Button } from '@/components/ui/button';
import TestimonialCard from './TestimonialCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import BotaoDeixaDepoimento from './BotaoDeixarDepoimento';
import { useEffect, useState } from 'react';
import { getTestimonials } from '@/app/(actions)/getTestimonials';
import Clientes from './clientes';

type Testimonial = {
  id: number;
  userId: string;
  descricao: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    email: string;
    nome: string;
    img: string | null;
  };
};

const Depoimentos = () => {
  const card = [
    {
      nome: 'Maria Silva',
      img: '/cliente-01.png',
      descricao:
        'Fiquei muito satisfeita com o resultado final. O trabalho foi feito com muito cuidado e atenção aos detalhes. Recebi elogios de vários clientes!',
    },
    {
      nome: 'João Pereira',
      img: '/cliente-01.png',
      descricao:
        'O serviço prestado foi de altíssima qualidade. O projeto foi concluído dentro do prazo e superou todas as minhas expectativas. Recomendo',
    },
    {
      nome: 'Fabio Costa',
      img: '/cliente-03.png',
      descricao:
        'Eu nunca imaginei que um site poderia fazer tanta diferença no meu negócio. O site que foi criado para minha empresa de instalações de ar condicionado não só atraiu novos clientes, como também facilitou o contato e a solicitação de orçamentos. Estou muito satisfeito!',
    },
    {
      nome: 'Carlos Almeida',
      img: '/cliente-04.png',
      descricao:
        'A criação do meu site foi um divisor de águas para o meu trabalho como eletricista. Agora, meus clientes podem ver meus serviços e me contatar facilmente. ',
    },
  ];

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Função para carregar depoimentos
  const loadTestimonials = async () => {
    try {
      const data = await getTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error('Erro ao carregar depoimentos:', error);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  return (
    <div
      className='flex flex-col cel_m:p-5  m-auto xl:w-[1280px] lg:w-[1024px] md:w-[]  '
      id='depoimentos'>
      <h2 className='text-2xl font-bold mb-4 text-blue-500 px-5 mt-3 cel_m:p-0'>
        Depoimentos
      </h2>
      <div className='flex flex-col w-full '>
        <div className='flex items-center h-fit py-10   w-full sm:w-[630px] lg:w-[950px] xl:w-full m-auto gap-4'>
          <Swiper
            className='w-full '
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              // Adjust breakpoints to fit your specific needs
              640: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 1,
              },
            }}
            pagination={{ clickable: true }}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={`testimonial-${index}`}>
                <TestimonialCard
                  nome={testimonial.user.nome}
                  img={testimonial.user.img || '/default-avatar.jpg'}
                  descricao={testimonial.descricao}
                  rating={testimonial.rating}
                />
              </SwiperSlide>
            ))}
            {card.map((cliente, index) => (
              <SwiperSlide className='mb-8' key={`card-${index}`}>
                <TestimonialCard
                  nome={cliente.nome}
                  img={cliente.img || '/default-avatar.jpg'}
                  descricao={cliente.descricao}
                  rating={5}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='flex items-center justify-center w-full  h-3'>
          <BotaoDeixaDepoimento onSaveSuccess={loadTestimonials} />
        </div>
      </div>
      <Clientes />
    </div>
  );
};

export default Depoimentos;
