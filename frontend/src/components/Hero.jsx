import { tw } from 'twind';

const Hero = () => {
  return (
    <div className={tw`flex min-h-screen`}>
      {/* Seção Hero (à esquerda) */}
      <div
        className={tw`relative bg-cover bg-center min-h-screen w-1/2`}
        style={{
          backgroundImage:
            'url("https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-azul-abstrato_23-2149352058.jpg?ga=GA1.1.907874342.1743096863&semt=ais_hybrid")',
        }}
      >
        <div className={tw`absolute inset-0 bg-black opacity-50`}></div>

        <div className={tw`relative z-10 min-h-screen flex justify-start items-center pl-16`}>
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

      {/* Seção Tecnológica (à direita) */}
      <div className={tw`relative w-1/2 bg-teal-600 flex justify-center items-center`}>
        <div className={tw`p-10 max-w-xl  shadow-lg rounded-lg animate__animated animate__fadeIn`}>
          <h2 className={tw`text-3xl font-bold text-center text-white mb-4`}>
            Inovações Tecnológicas
          </h2>

          {/* Animações de Tecnologia (CSS) */}
          <div className={tw`flex justify-center`}>
            <div className={tw`relative w-32 h-32`}>
              {/* Animação do círculo com ping */}
              <div
                className={tw`absolute top-0 left-0 w-32 h-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-ping`}
                style={{
                  animationDuration: '1.5s',
                  animationIterationCount: 'infinite',
                }}
              ></div>

              {/* Animação de linha que se estica e encolhe */}
              <div className={tw`absolute top-0 left-0 w-32 h-1 bg-teal-500 animate-pulse`}></div>
              <div className={tw`absolute top-8 left-0 w-32 h-1 bg-blue-500 animate-pulse`}></div>
              <div className={tw`absolute top-16 left-0 w-32 h-1 bg-teal-500 animate-pulse`}></div>
            </div>
          </div>

          <p className={tw`mt-6 text-white text-lg text-center`}>
            Explore soluções inovadoras e tecnológicas que estão transformando o futuro dos negócios. Conecte-se com o amanhã.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
