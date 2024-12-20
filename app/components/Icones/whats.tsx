import React from 'react';

// Definindo a interface para as props
interface WhatsProps {
  size?: number;
  color?: string;
}

const Whats: React.FC<WhatsProps> = ({
  size = 200,
  color = '#00bf22', // Cor padrão (verde)
}) => {
  return (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 200 200'
        width={size}
        height={size} // Mantém o tamanho proporcional
      >
        <title>icon-whats</title>
        <path
          d='M146.63,117.63c-2.28-1.25-13.49-7.3-15.59-8.15s-3.64-1.3-5.28,1-6.29,7.33-7.69,8.83-2.78,1.65-5.07.39-9.67-4-18.25-12.23A70.27,70.27,0,0,1,82.42,90.86c-1.28-2.38,0-3.59,1.2-4.7s2.42-2.64,3.64-4a16.1,16.1,0,0,0,2.46-3.79,4.24,4.24,0,0,0,0-4.07c-.54-1.19-4.76-12.8-6.52-17.52s-3.72-4-5.08-4.08-2.9-.3-4.44-.36a8.51,8.51,0,0,0-6.31,2.68c-2.22,2.24-8.44,7.64-8.86,19.08S66,97,67.05,98.53s15.11,26.39,38.38,36.58,23.41,7.09,27.68,6.86,14-5.11,16.11-10.46,2.31-10,1.77-11-2.08-1.63-4.36-2.88Zm-42.69,55.12a75.34,75.34,0,0,1-41.7-12.54l-29.13,9.33,9.47-28.15a75.77,75.77,0,1,1,61.36,31.36Zm0-166.86A91.06,91.06,0,0,0,26,144L9.52,192.81l50.41-16.13a91.06,91.06,0,1,0,44-170.79Z'
          fill={color} // Preenche todo o SVG com a cor passada
        />
      </svg>
    </div>
  );
};

export default Whats;
