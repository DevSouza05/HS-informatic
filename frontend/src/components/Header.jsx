import React from 'react';
import { Link } from 'react-router-dom';
import { tw } from 'twind';

const Header = () => {
  return (
    <header className={tw`bg-green-700 p-6 text-white shadow-md`}>
      <div className={tw`max-w-6xl mx-auto flex justify-between items-center`}>
        <h1 className={tw`text-2xl font-bold text-white-800`}>
          TecDev
        </h1>
        <nav className={tw`space-x-6`}>
          <Link to="/" className={tw`text-white-bold hover:underline`}>
            Login
          </Link>
          {/* <Link to="/login" className={tw`text-white-700 hover:underline`}>
            Login
          </Link> */}
          <Link to="/cadastro" className={tw`text-white-700 hover:underline`}>
            Cadastro
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
