'use client';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function CalculadoraDeBTUs() {
  const [largura, setLargura] = useState(0);
  const [comprimento, setComprimento] = useState(0);
  const [pessoas, setPessoas] = useState(1);
  const [aparelhos, setAparelhos] = useState(0);
  const [janelas, setJanelas] = useState(0);
  const [exposicaoSol, setExposicaoSol] = useState('Não pega sol');
  const [btus, setBtus] = useState(0);
  const [erro, setErro] = useState('');

  const calcularBTUs = () => {
    if (largura <= 0 || comprimento <= 0) {
      setErro('Por favor, preencha os campos de comprimento e largura.');
      return;
    }

    setErro('');

    const area = largura * comprimento;

    let cargaSolar = 0;
    if (exposicaoSol === 'Não pega sol') cargaSolar = 0;
    if (exposicaoSol === 'Manhã') cargaSolar = 300;
    if (exposicaoSol === 'Tarde') cargaSolar = 500;
    if (exposicaoSol === 'Manhã e Tarde') cargaSolar = 800;

    const resultado =
      area * 600 + pessoas * 600 + aparelhos * 600 + janelas * 400 + cargaSolar;
    setBtus(resultado);

    console.log('Cálculo de BTUs:', {
      largura,
      comprimento,
      pessoas,
      aparelhos,
      janelas,
      exposicaoSol,
      cargaSolar,
      resultado,
    });
  };

  return (
    <div className='m-auto lg:w-[500px] p-5  justify-center flex flex-col '>
      <div className='flex flex-col mt-8 '>
        <h3 className='text-center text-blue-500 font-bold text-2xl'>
          Calculadora de BTUs
        </h3>
        <p className='font-light mt-5 text-sm'>
          Para garantir o conforto do seu ambiente, é essencial escolher a
          capacidade correta de BTUs para o seu ar-condicionado. BTU (British
          Thermal Unit) é a medida que indica a potência de refrigeração do
          aparelho, e ela deve ser adequada ao tamanho do espaço e à quantidade
          de pessoas e aparelhos eletrônicos presentes.
        </p>
      </div>

      <div
        className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-8 w-fit m-auto 
      '>
        <div className='rounded-md border-gray-300 w-fit border-[1px] p-2 m-auto'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/ico-calculadora-comprimento.png'
              width={70}
              height={70}
              layout='intrinsic'
              alt='Icone Comprimento'
            />
            <div className='flex flex-col items-center gap-1 my-1'>
              <p className='text-sm'>Comprimento</p>
              <Input
                type='number'
                placeholder='Em Metros'
                min='0'
                step='0.5'
                value={comprimento || ''}
                onChange={(e) => {
                  const valor =
                    e.target.value === '' ? 0 : Number(e.target.value);
                  setComprimento(valor);
                }}
                className='cel_p:w-[110px] [130px] font-light'
              />
            </div>
          </div>
        </div>

        <div className='rounded-md border-gray-300 w-fit border-[1px] p-2 m-auto'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/ico-calculadora-largura.png'
              width={70}
              height={70}
              layout='intrinsic'
              alt='Icone Largura'
            />
            <div className='flex flex-col items-center gap-1 my-1'>
              <p className='text-sm'>Largura</p>
              <Input
                type='number'
                placeholder='Em Metros'
                min='0'
                step='0.5'
                value={largura || ''}
                onChange={(e) => {
                  const valor =
                    e.target.value === '' ? 0 : Number(e.target.value);
                  setLargura(valor);
                }}
                className='cel_p:w-[110px] [130px]  font-light'
              />
            </div>
          </div>
        </div>

        <div className='rounded-md border-gray-300 w-fit border-[1px] p-2 m-auto'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/iconeJanela.png'
              width={70}
              height={70}
              layout='intrinsic'
              alt='Icone Altura'
            />
            <div className='flex flex-col items-center gap-1 my-1'>
              <p className='text-sm'>Janelas</p>
              <Select
                value={String(janelas)}
                onValueChange={(value) => setJanelas(Number(value))}>
                <SelectTrigger className='cel_p:w-[110px] [130px] '>
                  <SelectValue placeholder='Quantidade' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='0'>Nunhuma Janela</SelectItem>
                  <SelectItem value='1'>1 Janela</SelectItem>
                  <SelectItem value='2'>2 Janelas</SelectItem>
                  <SelectItem value='3'>3 Janelas</SelectItem>
                  <SelectItem value='4'>4 Janelas</SelectItem>
                  <SelectItem value='5'>5 Janelas</SelectItem>
                  <SelectItem value='6'>6 Janelas</SelectItem>
                  <SelectItem value='7'>7 Janelas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className='rounded-md border-gray-300 w-fit border-[1px] p-2 m-auto'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/ico-calculadora-eletronicos.png'
              width={70}
              height={70}
              layout='intrinsic'
              alt='Icone Eletronicos'
            />
            <div className='flex flex-col items-center gap-1 my-1'>
              <p className='text-sm'>Eletrônicos</p>
              <Select
                value={String(aparelhos)}
                onValueChange={(value) => setAparelhos(Number(value))}>
                <SelectTrigger className='cel_p:w-[110px] [130px] '>
                  <SelectValue placeholder='Quantidade' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='0'>0 Eletrônicos</SelectItem>
                  <SelectItem value='1'>1 Eletrônico</SelectItem>
                  <SelectItem value='2'>2 Eletrônicos</SelectItem>
                  <SelectItem value='3'>3 Eletrônicos</SelectItem>
                  <SelectItem value='4'>4 Eletrônico</SelectItem>
                  <SelectItem value='5'>5 Eletrônicos</SelectItem>
                  <SelectItem value='6'>6 Eletrônicos</SelectItem>
                  <SelectItem value='7'>7 Eletrônico</SelectItem>
                  <SelectItem value='8'>8 Eletrônicos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className='rounded-md border-gray-300 w-fit border-[1px] p-2 m-auto'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/ico-calculadora-sol.png'
              width={70}
              height={70}
              layout='intrinsic'
              alt='Icone Exposição ao Sol'
            />
            <div className='flex flex-col items-center gap-1 my-1'>
              <p className='text-sm'>Exposição ao Sol</p>
              <Select
                value={exposicaoSol}
                onValueChange={(value) => setExposicaoSol(value)}>
                <SelectTrigger className='cel_p:w-[110px] [130px] '>
                  <SelectValue placeholder='Horários' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Não pega sol'>Não pega sol</SelectItem>
                  <SelectItem value='Manhã'>Manhã</SelectItem>
                  <SelectItem value='Tarde'>Tarde</SelectItem>
                  <SelectItem value='Manhã e Tarde'>Manhã e Tarde</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className='rounded-md border-gray-300 w-fit border-[1px] p-2 m-auto'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/ico-calculadora-pessoas.png'
              width={70}
              height={70}
              layout='intrinsic'
              alt='Icone Pessoas'
            />
            <div className='flex flex-col items-center gap-1 my-1'>
              <p className='text-sm'>Pessoas</p>
              <Select
                value={String(pessoas)}
                onValueChange={(value) => setPessoas(Number(value))}>
                <SelectTrigger className='cel_p:w-[110px] [130px] '>
                  <SelectValue placeholder='Quantidade' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='1'>1 Pessoa</SelectItem>
                  <SelectItem value='2'>2 Pessoas</SelectItem>
                  <SelectItem value='3'>3 Pessoas</SelectItem>
                  <SelectItem value='4'>4 Pessoa</SelectItem>
                  <SelectItem value='5'>5 Pessoas</SelectItem>
                  <SelectItem value='6'>6 Pessoas</SelectItem>
                  <SelectItem value='7'>7 Pessoa</SelectItem>
                  <SelectItem value='8'>8 Pessoas</SelectItem>
                  <SelectItem value='9'>9 Pessoas</SelectItem>
                  <SelectItem value='10'>10 Pessoas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <Button className='m-auto mt-6' onClick={calcularBTUs}>
        Calcular
      </Button>

      {erro && (
        <div className='text-center mt-4 text-red-500 text-sm font-semibold'>
          {erro}
        </div>
      )}

      <div className='text-center mt-4 text-lg font-bold text-blue-600'>
        {btus > 0 && `Resultado: ${btus} BTUs`}
      </div>

      <div className='w-fit mt-5 m-auto'>
        <Image
          src='/arEnt.svg'
          alt='Calcular Potencia'
          width={300}
          height={100}
          className='opacity-90'
        />
      </div>
    </div>
  );
}
