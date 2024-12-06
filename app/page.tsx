import { Separator } from '@/components/ui/separator';
import CalculadoraDeBTUs from './components/CalculadoraDeBTUs/CalculadoraDeBTUs';

import DuvidasFrequentes from './components/DuvidasFrequentes/duvidasFrequentes';

import Inicio from './components/Inicio/inicio';
import Servicos from './components/Servicos/servicos';
import Sobre from './components/Sobre/sobre-a-empresa';
import Footer from './components/Footer/Footer';
import Depoimentos from './components/Depoimentos/Depoimentos';

export default function Home() {
  return (
    <div>
      <div className='h-[70px]'></div>
      <Inicio />
      <Sobre />
      <Servicos />
      <Separator className='my-10' />
      <Depoimentos />
      <Separator className='my-10' />
      <div className=' m-auto lg:w-[1024px] xl:w-[1280px] grid grid-cols-1 md:grid-cols-2  justify-start items-start content-start'>
        <div>
          <DuvidasFrequentes />
        </div>
        <div>
          <CalculadoraDeBTUs />
        </div>
      </div>

      <Footer />
    </div>
  );
}
