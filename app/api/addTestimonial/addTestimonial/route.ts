// app/api/addTestimonial/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { descricao, rating, userId } = await request.json();

    // Verifica se o usuário existe
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });
    console.log(userExists);

    if (!userExists) {
      return NextResponse.json(
        { error: `Usuário com ID ${userId} não encontrado` },
        { status: 404 },
      );
    }

    // Cria o depoimento
    await prisma.testimonial.create({
      data: {
        descricao,
        rating,
        userId,
      },
    });

    return NextResponse.json({ message: 'Depoimento salvo com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar depoimento:', error);
    return NextResponse.json(
      { error: 'Erro ao salvar depoimento.' },
      { status: 500 },
    );
  }
}
