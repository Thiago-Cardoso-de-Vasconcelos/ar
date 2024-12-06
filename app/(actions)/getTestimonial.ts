'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTestimonial(userId: string) {
  try {
    const testimonial = await prisma.testimonial.findUnique({
      where: { userId },
    } as any);

    return testimonial;
  } catch (error: any) {
    console.error('Erro ao buscar depoimento:', error.message || error);
    throw error;
  }
}
