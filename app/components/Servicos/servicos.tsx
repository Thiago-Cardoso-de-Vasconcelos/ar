import Image from 'next/image';
import React from 'react';
import IconeAr from '../Icones/iconeAr';
import IconeCheck from '../Icones/iconeCheck';
import Marcas from './marcas';
import Tira from '../Icones/Tira';

export default function Servicos() {
  return (
    <div className='relative'>
      <div
        className='h-[600px] w-[500px] -ml-44  top-16 cel_m:-ml-32  cel_m:top-[70px] cel_g:-ml-24 cel_g:top-20   md:h-[600px] md:w-[500px]  md:-ml-24 md:top-24  lg:h-[600px] lg:w-[500px] lg:-ml-20 lg:top-28  xl:h-[580px] 2xl:h-[530px] xl:w-[950px] xl:mt-4 absolute z-10 bg-no-repeat   xl:bg-[0%_100%] 3xl:bg-[70%_90%] 3xl:w-[1000px] 3xl:mt-16 3xl:rotate-180

    bg-servico
   
  " '></div>
      <div
        className='hidden xl:flex lg:h-[600px] xl:h-[550px] 2xl:h-[520px] lg:w-[600px]  xl:w-[960px] xl:mt-32 absolute z-10 bg-no-repeat xl:bg-[30%_100%] 2xl:bg-[45%_100%] 3xl:bg-[90%_100%] 3xl:w-[1100px] 3xl:mt-44 

    sm:bg-servico
    md:bg-servico
    lg:bg-servico
    xl:bg-servico
  " '></div>

      <Tira color='#347EC8' />
      <div className='bg-[#347EC8] -my-2'>
        <div className='md:w-[768px] lg:w-[1024px] xl:w-[1280px]  m-auto  '>
          <div
            id='servico'
            className='flex flex-col md:w-[768px] lg:w-[1024px] xl:w-[1280px]  m-auto items-center justify-between '>
            <div className=' flex cel_p:flex-col md:flex-row m-auto items-center justify-between w-full z-20 '>
              <div className=' h-[500px]  mt-5 z-0'>
                <div className='w-[290px] cel_g:[400px] h-[500px]'>
                  <div className='  '>
                    <div className=' flex items-center gap-2 w-fit m-auto mt-16  '>
                      <p className='font-bold text-2xl text-blue-500'>
                        Serviços
                      </p>
                      <IconeAr color='#347EC8' size={50} />
                    </div>
                    <div className=' flex items-center gap-2 w-fit m-auto '>
                      <p className='font-bold text-2xl '>Trabalhamos com</p>
                    </div>
                  </div>

                  <div className='cel_g:ml-16 ml-2 mt-2 space-y-2'>
                    <div className='flex gap-1 items-center'>
                      <IconeCheck size={15} />
                      <p>Instalação de ar split</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <IconeCheck size={15} />
                      <p>Instalação de ar janela</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <IconeCheck size={15} />
                      <p>Instalação ar central</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <IconeCheck size={15} />
                      <p>Pré instalação</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <IconeCheck size={15} />
                      <p>Desentalação</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <IconeCheck size={15} />
                      <p>Higeinização</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <IconeCheck size={15} />
                      <p>Manutenção</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <IconeCheck size={15} />
                      <p>Instalação elétrica</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <IconeCheck size={15} />
                      <p>Contrato de manutenção</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=' h-[500px]   '>
                <div className='w-[320px] md:w-[360px] lg:w-[600px]  h-[500px]  pt-3 flex '>
                  <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center content-center w-fit p-5 m-auto'>
                    <div className=' border-white border-2 rounded-lg w-[130px] h-[130px]  lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] m-auto relative '>
                      <Image
                        src={'/servico02.jpg'}
                        alt='ar'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <div className=' border-white border-2 rounded-lg w-[130px] h-[130px]  lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] m-auto overflow-hidden relative'>
                      <Image
                        src={'/servico06.jpg'}
                        alt='ar'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <div className=' border-white border-2 rounded-lg w-[130px] h-[130px]  lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] m-auto overflow-hidden relative'>
                      <Image
                        src={'/servico05.jpg'}
                        alt='ar'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <div className=' border-white border-2 rounded-lg w-[130px] h-[130px]  lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] m-auto overflow-hidden relative'>
                      <Image
                        src={'/servico03.jpg'}
                        alt='ar'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <div className=' border-white border-2 rounded-lg w-[130px] h-[130px]  lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] m-auto overflow-hidden relative'>
                      <Image
                        src={'/servico04.jpg'}
                        alt='ar'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                    <div className=' border-white border-2 rounded-lg w-[130px] h-[130px]  lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] m-auto overflow-hidden relative'>
                      <Image
                        src={'/servico01.jpg'}
                        alt='ar'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tira rotation={180} />

      <Marcas />
    </div>
  );
}
