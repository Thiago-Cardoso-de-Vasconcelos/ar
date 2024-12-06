import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string; // Adiciona o campo 'id' ao tipo User
  }

  interface Session {
    user: {
      id: string; // Adiciona o campo 'id' à sessão
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
