import { tw } from 'twind';

const Hero = () => {
  return (
    <>
      {/* Seção Hero (à esquerda) */}
      <div
        className={tw`relative bg-cover bg-center h-screen w-full`} // Alterado de min-h-screen para h-screen e w-full
        style={{
          backgroundImage:
            'url("https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-azul-abstrato_23-2149352058.jpg?ga=GA1.1.907874342.1743096863&semt=ais_hybrid")',
        }}
      >
        <div className={tw`absolute inset-0 bg-black opacity-50`}></div>

        <div className={tw`relative z-10 h-full flex justify-start items-center pl-16`}>
          <div className={tw`p-10 max-w-xl shadow-lg rounded-lg animate__animated animate__fadeIn`}>
            <h1
              className={tw`text-4xl font-extrabold text-left text-white animate-pulse`}
              style={{
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Bem-vindo à HS WARE
            </h1>
            <p
              className={tw`mt-4 text-lg text-left text-white`}
              style={{
                fontFamily: "'Roboto', sans-serif",
              }}
            >
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

export default Hero;
