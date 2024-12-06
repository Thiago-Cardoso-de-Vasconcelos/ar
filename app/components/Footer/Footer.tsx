import { Separator } from '@/components/ui/separator';
import React from 'react';
import IconMapa from '../Icones/IconeMapa';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='bg-black w-full m-auto flex flex-col h-fit'>
      <div className=' bg-footer03 opacity-10 h-[424px] w-[33%]  absolute z-10 bg-no-repeat bg-[10%_90%]'></div>
      <div className=' bg-footer01 opacity-10 ml-[33%] h-[424px] w-[33%]  absolute z-10 bg-no-repeat bg-[10%_40%]'></div>
      <div className=' bg-footer02 opacity-10 ml-[66%] h-[424px] w-[34%]  absolute z-10 bg-no-repeat bg-[40%_50%]'></div>

      <div className='relative  m-auto z-10 font-light text-sm cel_p:w-[318px] cel_m:w-[350px] cel_g:w-[400px] md:w-[768px] lg:w-[1024px]  xl:w-[1280px]'>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 text-white mt-10 '>
          <div className='flex flex-col col-span-2 '>
            <h3 className='font-bold text-xl mb-3'>Logo</h3>
            <p>
              (sua empresa) Está Prestanto serviços de instalação e manutenção
              de ar-condicionado desde Maio de 2015.
            </p>
          </div>

          <div className='flex flex-col'>
            <h3 className='font-bold text-xl mb-3'>Atendemos</h3>
            <ul> - Porto Alegre</ul>
            <ul> - Região Metropolitana</ul>
            <ul> - Litoral</ul>
          </div>

          <div className='flex flex-col '>
            <h3 className='font-bold text-xl mb-3'>Pagamentos</h3>
            <p>
              só Aceitamos dinheiro, cartão de crédito, débito e pix na hora.
              Descontos especiais só seram aplicados quando for dinheiro ou pix.
            </p>
          </div>

          <div className='flex flex-col'>
            <h3 className='font-bold text-xl mb-3'>Dias e Horários</h3>
            <p>
              De Segunda a sexta feira das 8:00 ás 18:00, <br /> Sabado das 8:00
              ás 12:00
            </p>
          </div>

          <div className='flex flex-col'>
            <h3 className='font-bold text-xl mb-3'>Redes Sociais</h3>
            <p>Siga para acompanha nossas novidades!</p>
            <div className='flex gap-2 mt-3'>
              <Image
                src={'/iconeInstagram.svg'}
                alt='telefone'
                width={40}
                height={40}
              />
              <Image
                src={'/iconeFacebook.svg'}
                alt='telefone'
                width={40}
                height={40}
              />
            </div>
          </div>

          <div className='flex flex-col col-span-2 '>
            <h3 className='font-bold text-2xl mb-3'>Contato</h3>
            <div className='flex items-center gap-2 mb-3'>
              <div className='h-fit px-1'>
                <Image
                  src={'/iconeTelefone.svg'}
                  alt='telefone'
                  width={25}
                  height={25}
                />
              </div>
              <p>(51)98268-67663</p>
            </div>

            <div className='flex items-center  gap-2'>
              <div className='h-fit'>
                <IconMapa size={30} color='#fff' />
              </div>
              <p>
                Av. Rio Grande do Sul, 2393 - Mathias Velho, Canoas - RS,
                92330-000
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col  justify-center p-5 pt-10   m-auto  text-white'>
          <Separator className='mb-5 opacity-30' />
          <p className='text-center text-sm italic m-auto '>
            (sua empresa) Maio de 2015.
          </p>
        </div>
      </div>
    </div>
  );
}
