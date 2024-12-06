import TextWithLimit from '@/app/util/TextWithLimit';
import Image from 'next/image';

type TestimonialCardProps = {
  nome: string;
  img: string;
  descricao: string;
  rating: number;
};

export default function TestimonialCard({
  nome,
  img,
  descricao,
  rating,
}: TestimonialCardProps) {
  return (
    <div className='w-[290px] h-[250px] mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4'>
      <div className=' flex'>
        <div className='flex justify-center p-2  w-[150px]'>
          <Image
            src={img}
            alt={nome}
            className='h-20 w-20 object-cover rounded-full'
            width={65}
            height={65}
          />
        </div>
        <div className='px-2 flex flex-col justify-center '>
          <TextWithLimit text={nome} maxLength={30} className='w-[90px]' />
          <div className='flex items-center mt-2'>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
                  index < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
              </svg>
            ))}
          </div>
        </div>
        <div
          className=' flex w-[100
        px] justify-end p-6 items-start'>
          <Image src={'/aspas.svg'} width={60} height={60} alt='aspas' />
        </div>
      </div>
      <div className='m-4'>
        <p className=' text-gray-500 text-sm h-28 overflow-y-auto'>
          {descricao}
        </p>
      </div>
    </div>
  );
}
