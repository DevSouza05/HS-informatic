import React from 'react';
import { Link } from 'react-router-dom';
import { tw } from 'twind';

const Home = () => {
  return (
    <div className={tw`text-center p-6`}>
      <header className={tw`bg-secondary p-6 text-white`}>
        <h1 className={tw`text-3xl`}>Bem-vindo ao Sistema</h1>
        <nav className={tw`mt-4`}>
          <Link to="/login" className={tw`mx-4 text-primary hover:underline`}>Login</Link>
          <Link to="/cadastro" className={tw`mx-4 text-primary hover:underline`}>Cadastro</Link>
        </nav>
      </header>

      <main className={tw`mt-8 mx-auto max-w-3xl text-lg`}>
        <p>Este sistema permite que você gerencie seus dados de forma simples e eficaz.</p>
        <p className={tw`mt-4`}>Faça login ou cadastre-se para começar.</p>
      </main>

      <footer className={tw`mt-12 text-sm text-gray-500`}>
        <p>© 2025 HsInformatic. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
