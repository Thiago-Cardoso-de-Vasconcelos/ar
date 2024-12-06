'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useSession, signIn, signOut } from 'next-auth/react';
import EditableTestimonialCard from './EditableTestimonialCard';
import { addTestimonial } from '@/app/(actions)/addTestimonial';

type BotaoDeixaDepoimentoProps = {
  onSaveSuccess: () => void;
};

const BotaoDeixaDepoimento = ({ onSaveSuccess }: BotaoDeixaDepoimentoProps) => {
  const { data: session } = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSave = async (
    descricao: string,
    rating: number,
    userId: string,
  ) => {
    try {
      // Chama a server action
      console.log(userId);
      const result = await addTestimonial(descricao, rating, userId);
      alert('Depoimento salvo com sucesso');
      onSaveSuccess();
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Erro no handleSave:', error);
      alert('Erro ao salvar depoimento');
    }
  };

  return (
    <>
      {session ? (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant='outline' size={'lg'}>
              Deixe seu depoimento!
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Faça sua avaliação!</DialogTitle>
              <DialogDescription>
                <EditableTestimonialCard
                  nome={session.user?.name || 'Usuário'}
                  img={session.user?.image || '/default-avatar.png'}
                  userId={session.user?.id || 'default-user-id'} // Passe o ID do usuário aqui
                  onSave={handleSave} // Passe a função handleSave
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant={'default'}
                className='gap-3'
                onClick={() => signOut()}>
                {/* <FontAwesomeIcon icon={faGoogle} color='white' /> */}
                Sair
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' size={'lg'}>
              Deixe seu depoimento!
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Faça login para deixar seu depoimento!</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant={'default'}
                className='gap-3'
                onClick={() => signIn('google')}>
                {/* <FontAwesomeIcon icon={faGoogle} color='white' /> */}
                Entrar com Google
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default BotaoDeixaDepoimento;
