import React from 'react';

// Definindo a interface para as props
interface SetasProps {
  size?: number;
  color1?: string;
  color2?: string;
  direction?: 'right' | 'left' | 'top' | 'bottom'; // nova prop para controlar a direção
}

const Setas: React.FC<SetasProps> = ({
  size = 200,
  color1 = '#347ec8',
  color2 = '#347ec8',
  direction = 'right',
}) => {
  // Determinar a rotação baseada na direção
  const rotation =
    direction === 'right'
      ? 0
      : direction === 'left'
      ? 180
      : direction === 'top'
      ? 90
      : 270; // 270 graus para a direção "bottom"

  return (
    <div>
      <svg
        id='Camada_1'
        data-name='Camada 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 200 93'
        width={size}
        height={size * (93 / 200)} // Mantém a proporção do SVG
        style={{ transform: `rotate(${rotation}deg)` }} // Aplica a rotação
      >
        <defs>
          <style>
            {`
              .cls-1 { 
                fill: none; 
                stroke: ${color1}; 
                stroke-miterlimit: 10; 
                stroke-width: 2.76px; 
              }
              .cls-2 { 
                fill: none; 
                stroke: ${color2}; 
                stroke-miterlimit: 10; 
                stroke-width: 3.76px;  
              }
            `}
          </style>
        </defs>
        <title>setas</title>
        <polygon
          className='cls-1'
          points='30.17 4.11 4.55 4.28 39.67 46.81 5.14 89.81 30.76 89.64 65.29 46.63 30.17 4.11'
        />
        <polygon
          className='cls-2'
          points='75.38 3.79 49.76 3.97 84.88 46.5 50.35 89.5 75.97 89.33 110.5 46.32 75.38 3.79'
        />
        <polygon
          className='cls-1'
          points='119.12 3.5 93.5 3.67 128.62 46.2 94.09 89.2 119.71 89.03 154.24 46.02 119.12 3.5'
        />
        <polygon
          className='cls-2'
          points='164.33 3.19 138.71 3.36 173.83 45.89 139.3 88.89 164.92 88.72 199.45 45.72 164.33 3.19'
        />
      </svg>
    </div>
  );
};

export default Setas;
