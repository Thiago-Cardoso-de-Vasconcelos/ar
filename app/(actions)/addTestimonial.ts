'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addTestimonial(
  descricao: string,
  rating: number,
  userId: string,
) {
  try {
    console.log('Função addTestimonial chamada com:', {
      descricao,
      rating,
      userId,
    });

    // Usando upsert para verificar e atualizar se já existir um depoimento com esse userId
    await prisma.testimonial.upsert({
      where: { userId }, // Força o uso do campo `userId` como único userId já está marcado como @unique no seu modelo
      update: {
        descricao,
        rating,
      },
      create: {
        descricao,
        rating,
        userId,
      },
    } as any); // Casting do tipo para ignorar o erro de tipagem

    console.log('Depoimento salvo ou atualizado com sucesso!');
  } catch (error: any) {
    console.error(
      'Erro ao salvar ou atualizar depoimento:',
      error.message || error,
    );
    throw error;
  }
}
