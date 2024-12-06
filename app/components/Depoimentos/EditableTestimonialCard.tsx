'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Textarea } from '@/components/ui/textarea';
import { getTestimonial } from '@/app/(actions)/getTestimonial';
import TextWithLimit from '@/app/util/TextWithLimit';
import { Button } from '@/components/ui/button';

type EditableTestimonialCardProps = {
  nome: string;
  img: string;
  descricao?: string;
  userId: string;
  onSave: (descricao: string, rating: number, userId: string) => void; // Atualizado para incluir userId
};

export default function EditableTestimonialCard({
  nome,
  img,
  descricao = '',
  userId,
  onSave,
}: EditableTestimonialCardProps) {
  const [editableDescricao, setEditableDescricao] = useState(descricao);
  const [rating, setRating] = useState(5);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Verifica se já existe um depoimento e atualiza o estado
    const fetchTestimonial = async () => {
      try {
        const testimonial = await getTestimonial(userId);
        if (testimonial) {
          setEditableDescricao(testimonial.descricao);
          setRating(testimonial.rating);
          setIsEditing(true);
        }
      } catch (error) {
        console.error('Erro ao buscar depoimento:', error);
      }
    };

    fetchTestimonial();
  }, [userId]);

  const handleSave = async () => {
    if (userId) {
      try {
        await onSave(editableDescricao, rating, userId); // Chama a função onSave passada como prop
        console.log('Depoimento salvo com sucesso');
      } catch (error) {
        console.error('Erro ao salvar depoimento:', error);
      }
    } else {
      alert('ID do usuário não encontrado.');
    }
  };

  return (
    <div className='w-[270px] cel_m:w-[320px] h-[auto] mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4'>
      <div className='flex justify-between'>
        <div className='flex justify-center p-2 w-[150px]'>
          <Image
            src={img}
            alt={nome}
            className='h-16 w-16 object-cover rounded-full'
            width={50}
            height={50}
          />
        </div>
        <div className='px-2 flex flex-col items-start w-full'>
          <TextWithLimit
            text={nome}
            maxLength={30}
            className='w-[100px] items-start text-left'
          />
          <div className='flex items-start mt-2  w-full'>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                onClick={() => setRating(index + 1)}
                className={`w-5 h-5 cursor-pointer ${
                  index < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill='currentColor'
                viewBox='0 0 24 24'>
                <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
              </svg>
            ))}
          </div>
        </div>
        <div className='flex relative w-[80px] justify-end p-6 items-start'>
          <Image
            src={'/aspas.svg'}
            className='absolute top-2 right-2'
            width={50}
            height={50}
            alt='aspas'
          />
        </div>
      </div>
      <div className='m-4'>
        <Textarea
          value={editableDescricao}
          onChange={(e) => setEditableDescricao(e.target.value)}
          placeholder='Digite seu depoimento...'
        />
      </div>
      <Button onClick={handleSave} className='mt-2 px-4 py-2   rounded w-full'>
        {isEditing ? 'Editar depoimento!' : 'Postar depoimento!'}
      </Button>
    </div>
  );
}
