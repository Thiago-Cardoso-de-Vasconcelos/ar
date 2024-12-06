import NextAuth from 'next-auth';
import { authOptions } from './authOptions'; // Certifique-se de que este caminho está correto

// Manipulador do NextAuth para os métodos HTTP GET e POST
const handler = NextAuth(authOptions);

// Exporta os manipuladores como GET e POST
export { handler as GET, handler as POST };
