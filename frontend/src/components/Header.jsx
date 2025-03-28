import { tw } from 'twind';
import { useState } from 'react';

const Header = () => {
  const [language, setLanguage] = useState('pt');
  const [menuOpen, setMenuOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false); 
  };

  return (
    <header className={tw`bg-transparent p-4 fixed top-0 left-0 w-full z-50 shadow-md`}>
      <div className={tw`container mx-auto flex items-center justify-between`}>
        {/* Logo */}
        <div className={tw`text-white text-2xl font-bold`}>
          <img
            src='../src/assets/logo_hsti.png' 
            alt='Logo HS TI'
            className={tw`h-8`} 
          />
        </div>

        {/* Menu - para telas grandes */}
        <nav className={tw`hidden md:flex`}>
          <ul className={tw`flex space-x-8`}>
            <li><a href="/" className={tw`text-white font-bold hover:text-teal-200`}>Home</a></li>
            <li><a href="#quem-somos" className={tw`text-white font-bold hover:text-teal-200`}>Quem Somos</a></li>
            <li><a href="#o-que-fazemos" className={tw`text-white font-bold hover:text-teal-200`}>O que Fazemos</a></li>
            <li><a href="#contato" className={tw`text-white font-bold hover:text-teal-200`}>Contato</a></li>
          </ul>
        </nav>

        {/* Botão para o Menu Hamburguer */}
        <div className={tw`md:hidden`}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={tw`text-white`}
          >
            <svg className={tw`h-6 w-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Menu Hamburguer para telas pequenas */}
        {menuOpen && (
          <nav className={tw`absolute top-16 left-0 w-full bg-teal-400 p-4`}>
            <ul className={tw`flex flex-col space-y-4`}>
              <li><a href="/" className={tw`text-white hover:text-teal-200`}>Home</a></li>
              <li><a href="#quem-somos" className={tw`text-white hover:text-teal-200`}>Quem Somos</a></li>
              <li><a href="#o-que-fazemos" className={tw`text-white hover:text-teal-200`}>O que Fazemos</a></li>
              <li><a href="#contato" className={tw`text-white hover:text-teal-200`}>Contato</a></li>
            </ul>
          </nav>
        )}

        {/* Dropdown de Idioma */}
        <div className={tw`relative`}>
          {/* Botão do Dropdown de Idioma */}
          <button 
            className={tw`text-white hover:text-teal-200`} 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
          >
            {language === 'pt' ? 'Português' : language === 'en' ? 'English' : 'Español'}
          </button>

          {/* Menu de Idiomas */}
          {dropdownOpen && (
            <div className={tw`absolute right-0 bg-white text-black shadow-lg rounded-md mt-2`}>
              <ul className={tw`py-2`}>
                <li><a href="#" className={tw`block px-4 py-2 text-sm`} onClick={() => handleLanguageChange('pt')}>Português</a></li>
                <li><a href="#" className={tw`block px-4 py-2 text-sm`} onClick={() => handleLanguageChange('en')}>English</a></li>
                <li><a href="#" className={tw`block px-4 py-2 text-sm`} onClick={() => handleLanguageChange('es')}>Español</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
