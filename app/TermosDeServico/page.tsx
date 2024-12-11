import React from 'react';

export default function page() {
  return (
    <div className='mt-[10%] absolute  w-full'>
      <div className='m-auto w-1/2'>
        <div>
          <h1>Termos de Serviço</h1>
          <p>
            Ao usar nosso aplicativo, você concorda com os Termos de Serviço
            descritos abaixo. Caso não concorde com estes termos, por favor, não
            utilize o aplicativo.
          </p>
          <h2>1. Uso do Aplicativo</h2>
          <p>
            Você se compromete a utilizar o aplicativo de maneira lícita,
            respeitando as leis aplicáveis e não violando os direitos de
            terceiros.
          </p>
          <h2>2. Responsabilidades</h2>
          <p>
            Nos esforçamos para manter o aplicativo funcional e seguro, mas não
            garantimos sua disponibilidade ininterrupta ou livre de erros. Não
            nos responsabilizamos por danos causados pelo uso do aplicativo.
          </p>
          <h2>3. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de alterar estes Termos a qualquer momento.
            Notificaremos os usuários sobre mudanças significativas.
          </p>
          <h2>4. Contato</h2>
          <p>
            Em caso de dúvidas sobre os Termos de Serviço, envie um e-mail para:{' '}
            <a href='mailto:contato@seusite.com'>contato@seusite.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
