import React from 'react';
import '../src/App.css'; 
import { tw } from 'twind';

const App = () => {
  return (
    <>
    <div className={tw`bg-gray-100 min-h-screen flex justify-center items-center`}>
      <div className={tw`p-10 max-w-xl bg-white shadow-lg rounded-lg animate__animated animate__fadeIn`}>
        <h1 className={tw`text-3xl font-bold text-center`}>Bem-vindo à HS WARE</h1>
        <p className={tw`mt-4 text-lg text-center`}>
          Transformamos seu negócio com soluções tecnológicas e inovadoras.
        </p>
        <a href="#services" className={tw`mt-6 block px-6 py-3 bg-teal-400 text-white text-center rounded-lg shadow-md hover:bg-teal-500`}>
          Saiba mais
        </a>
      </div>
    </div>
    </>
   
  );
};

export default App;
