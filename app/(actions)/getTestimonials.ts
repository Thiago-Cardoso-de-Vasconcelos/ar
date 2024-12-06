'use server';
import prisma from '@/lib/prisma';

export async function getTestimonials() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      include: {
        user: true, // Para pegar os dados do usuário associado
      },
      orderBy: {
        updatedAt: 'desc', // Ordena pelos depoimentos mais recentes primeiro
      },
    });
    return testimonials;
  } catch (error) {
    console.error('Erro ao buscar depoimentos:', error);
    throw error;
  }
}
