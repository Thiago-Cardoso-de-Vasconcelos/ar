import { useState } from 'react';
import classNames from 'classnames';

type TextWithLimitProps = {
  text: string;
  maxLength: number;
  className?: string; // Adiciona a propriedade className
};

const TextWithLimit = ({ text, maxLength, className }: TextWithLimitProps) => {
  const [isTruncated, setIsTruncated] = useState(true);

  // Função para truncar o texto
  const truncatedText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div
      className={classNames(
        'flex',
        'items-center',
        'justify-start',
        'relative',
        className,
      )}>
      <p className='block mt-1 text-lg leading-tight font-medium text-black'>
        {isTruncated ? truncatedText : text}
      </p>
      {text.length > maxLength && (
        <button onClick={() => setIsTruncated(!isTruncated)}>
          {isTruncated ? (
            <p className='text-[12px] font-extrabold absolute bottom-0 left-[115px]'>
              +
            </p>
          ) : (
            <p className='text-[12px]  font-extrabold absolute bottom-0 left-[115px]'>
              -
            </p>
          )}
        </button>
      )}
    </div>
  );
};

export default TextWithLimit;
