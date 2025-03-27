import React from 'react';
import '../src/App.css'; 
import { tw } from 'twind';
import Header from './components/Header';

const App = () => {
  return (
    <>
      {/* Header - permanece igual */}
      <Header />
      
      {/* Container Principal */}
      <div
        className={tw`relative bg-cover bg-center min-h-screen`} 
        style={{
          backgroundImage: 'url("https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-azul-abstrato_23-2149352058.jpg?ga=GA1.1.907874342.1743096863&semt=ais_hybrid")'
        }}
      >
        {/* Sobreposição escura */}
        <div className={tw`absolute inset-0 bg-black opacity-50`}></div>

        {/* Conteúdo Principal */}
        <div className={tw`relative z-10 min-h-screen flex justify-center items-center`}>
          <div className={tw`p-10 max-w-xl bg-white shadow-lg rounded-lg animate__animated animate__fadeIn`}>
            <h1 className={tw`text-3xl font-bold text-center`}>Bem-vindo à HS WARE</h1>
            <p className={tw`mt-4 text-lg text-center`}>
              Transformamos seu negócio com soluções tecnológicas e inovadoras.
            </p>
            <a 
              href="#services" 
              className={tw`mt-6 block px-6 py-3 bg-teal-400 text-white text-center rounded-lg shadow-md hover:bg-teal-500`}
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
