'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import IconeInterrogacao from '../Icones/IconeInterrogacao';

export default function DuvidasFrequentes() {
  return (
    <div id='duvidasFrequentes' className='flex flex-col lg:w-[500px]'>
      <div className='p-5'>
        <div className='flex gap-2 mt-8 mb-8 items-center '>
          <h3 className='font-bold text-2xl text-blue-500 '>
            Duvidas Frequentes
          </h3>
          <div className='h-fit mt-1 '>
            <IconeInterrogacao size={30} />
          </div>
        </div>

        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              Qual a capacidade ideal de ar-condicionado para o meu ambiente?
            </AccordionTrigger>
            <AccordionContent>
              Para encontrar a capacidade de ar-condicionado em BTUs ideal para
              o seu ambiente, você deve considerar o tamanho do espaço, o número
              de pessoas que o ocupam com frequência e a quantidade de aparelhos
              eletrônicos em funcionamento. Em média, ambientes com cerca de
              10m² exigem um aparelho de 7.500 a 9.000 BTUs. Já espaços maiores,
              como salas ou áreas comerciais, podem precisar de 12.000 a 18.000
              BTUs ou mais. Use nossa calculadora de BTUs para ajudar a
              determinar o aparelho ideal, economizando energia e garantindo o
              conforto.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              Quais os tipos de ar-condicionado disponíveis e qual o mais
              indicado para mim?
            </AccordionTrigger>
            <AccordionContent>
              Existem diferentes tipos de ar-condicionado, como:
              <ul>
                <li>
                  <strong>Split:</strong> Discreto e eficiente, ideal para
                  ambientes que priorizam o design e o silêncio.
                </li>
                <li>
                  <strong>Janela:</strong> Mais tradicional, indicado para quem
                  procura um modelo compacto e econômico.
                </li>
                <li>
                  <strong>Portátil:</strong> Prático para quem não pode fazer
                  instalação fixa, sendo fácil de mover entre ambientes.
                </li>
                <li>
                  <strong>Inverter:</strong> Um modelo avançado que oferece
                  economia de energia.
                </li>
              </ul>
              Cada modelo é indicado para necessidades específicas. O Split
              Inverter, por exemplo, é uma excelente escolha para quem busca
              eficiência energética e menor ruído.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              O que é ar-condicionado Inverter e quais são as suas vantagens?
            </AccordionTrigger>
            <AccordionContent>
              O ar-condicionado Inverter ajusta a velocidade do compressor de
              acordo com a temperatura desejada, evitando picos de energia e
              proporcionando uma refrigeração constante. Suas principais
              vantagens incluem:
              <ul>
                <li>Economia de até 40% na conta de luz.</li>
                <li>Menor variação de temperatura.</li>
                <li>Funcionamento mais silencioso.</li>
              </ul>
              É ideal para quem busca eficiência e economia a longo prazo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>
              Como é o processo de instalação do ar-condicionado?
            </AccordionTrigger>
            <AccordionContent>
              A instalação de um ar-condicionado envolve algumas etapas
              principais:
              <ul>
                <li>
                  Escolha do local para a unidade interna e externa (no caso dos
                  modelos Split).
                </li>
                <li>
                  Perfuração e passagem de tubulação que conecta as unidades.
                </li>
                <li>
                  Conexões elétricas e teste de funcionamento para garantir a
                  eficiência.
                </li>
              </ul>
              O tempo médio de instalação varia de 2 a 4 horas, dependendo da
              complexidade. É importante que a instalação seja feita por
              profissionais para evitar problemas futuros.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>
              Onde é o melhor lugar para instalar o ar-condicionado?
            </AccordionTrigger>
            <AccordionContent>
              O melhor lugar para instalar o ar-condicionado é em uma parede
              onde o fluxo de ar possa se distribuir bem pelo ambiente. Evite
              instalar o aparelho diretamente sobre camas ou sofás, e escolha
              uma parede onde o ar circule de forma uniforme. A unidade externa
              deve ser posicionada em um local bem ventilado para garantir a
              eficiência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionTrigger>
              Preciso de algum preparo elétrico ou estrutural antes da
              instalação?
            </AccordionTrigger>
            <AccordionContent>
              Sim, é recomendável verificar se há uma tomada exclusiva e um
              disjuntor específico para o ar-condicionado, que evite sobrecargas
              na rede elétrica. Além disso, a parede onde o aparelho será
              instalado deve ser resistente o suficiente para suportar o peso.
              Esses preparos garantem segurança e a durabilidade do sistema.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-7'>
            <AccordionTrigger>
              Quais são os custos envolvidos na instalação de um
              ar-condicionado?
            </AccordionTrigger>
            <AccordionContent>
              Os custos de instalação variam de acordo com o tipo e a capacidade
              do ar-condicionado. Modelos Split, por exemplo, costumam ter um
              custo de instalação mais alto devido à necessidade de tubulação e
              conexão elétrica entre as unidades interna e externa. Outras
              variáveis incluem a altura de instalação e a complexidade do
              local.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-8'>
            <AccordionTrigger>
              A instalação de ar-condicionado gera muita sujeira ou danos na
              parede?
            </AccordionTrigger>
            <AccordionContent>
              A instalação de ar-condicionado pode gerar poeira e pequenos
              resíduos, principalmente no momento de perfuração das paredes. No
              entanto, instaladores experientes utilizam métodos para minimizar
              a sujeira, como uso de lonas protetoras. Qualquer furo ou
              instalação feita é finalizada com um acabamento que deixa o
              ambiente limpo e seguro.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-9'>
            <AccordionTrigger>
              Como é a manutenção do ar-condicionado?
            </AccordionTrigger>
            <AccordionContent>
              A manutenção inclui a limpeza dos filtros, que deve ser feita a
              cada 15 a 30 dias, e a limpeza completa do aparelho, que é
              recomendada pelo menos uma vez ao ano. A manutenção preventiva é
              fundamental para prolongar a vida útil do aparelho, além de
              melhorar o desempenho e a qualidade do ar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-10'>
            <AccordionTrigger>
              O ar-condicionado aumenta muito a conta de luz?
            </AccordionTrigger>
            <AccordionContent>
              Um ar-condicionado eficiente e dimensionado corretamente não deve
              causar um aumento excessivo na conta de luz. Modelos Inverter
              ajudam a economizar até 40% de energia. Além disso, boas práticas
              como manter as portas e janelas fechadas e ajustar a temperatura
              para 23-24°C ajudam a economizar energia.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-11'>
            <AccordionTrigger>Quanto tempo dura a instalação?</AccordionTrigger>
            <AccordionContent>
              A instalação de um ar-condicionado geralmente leva de 2 a 4 horas,
              mas o tempo pode variar dependendo da complexidade, como altura do
              local de instalação e tipo de parede.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-12'>
            <AccordionTrigger>
              Como faço para manter a garantia do ar-condicionado?
            </AccordionTrigger>
            <AccordionContent>
              Para manter a garantia do ar-condicionado, é fundamental seguir as
              recomendações do fabricante quanto à manutenção e uso do aparelho.
              Isso inclui limpezas periódicas e instalação realizada por
              profissionais certificados. Além disso, é importante não realizar
              reparos ou modificações que não estejam previstas no manual do
              fabricante.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-13'>
            <AccordionTrigger>
              Posso instalar o ar-condicionado por conta própria ou preciso de
              um profissional?
            </AccordionTrigger>
            <AccordionContent>
              A instalação de um ar-condicionado é um processo técnico que exige
              conhecimento especializado em elétrica e refrigeração. A
              instalação inadequada pode causar danos ao aparelho e à rede
              elétrica, além de invalidar a garantia. Por isso, é altamente
              recomendável que a instalação seja feita por um técnico
              especializado.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className='w-full h-[0.1px] bg-gray-200 mt-10'></div>
    </div>
  );
}
