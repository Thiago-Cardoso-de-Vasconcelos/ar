import React from 'react';

export default function Sobre() {
  return (
    <div className='px-5 py-10 md:w-[768px]  lg:w-[1024px] xl:w-[1280px] m-auto'>
      <h3 className='text-3xl font-bold text-blue-500 m-auto text-center'>
        Sobre a empresa
      </h3>
      <p className='mt-4 font-light xl:w-1/2 m-auto text-center'>
        Somos uma empresa séria e responsável, com vasta experiência no setor de
        refrigeração, dedicada a proporcionar conforto e qualidade no ambiente
        dos nossos clientes. Contamos com uma equipe de profissionais altamente
        qualificados e atualizados com as melhores práticas do mercado,
        garantindo um atendimento de excelência desde o primeiro contato até o
        pós-serviço.
        <br />
        <br />
        Nosso compromisso é com a qualidade e o melhor custo-benefício,
        oferecendo soluções completas para todas as necessidades de
        climatização. Realizamos serviços de instalação, higienização,
        assistência técnica e manutenção em aparelhos de todas as marcas,
        prezando pela segurança e pelo desempenho máximo dos equipamentos.
      </p>
    </div>
  );
}
