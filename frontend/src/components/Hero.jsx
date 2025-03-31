import { tw } from 'twind';

const Hero = () => {
  return (
    <>
      <div className={tw`relative bg-cover bg-center h-screen w-full`} 
        style={{
          backgroundImage:
            'url("https://img.freepik.com/vetores-gratis/fundo-cibernetico-futurista-gradiente_23-2149117429.jpg?uid=R112632644&ga=GA1.1.907874342.1743096863&semt=ais_hybrid")',
        }}
      >
        <div className={tw`flex h-full`}>
          {/* Seção Hero (à esquerda) */}
          <div className={tw`w-1/2 flex justify-start items-center pl-16 z-10`}>
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

          {/* Seção Formulário de Cadastro (à direita) */}
          <div className={tw`w-1/2 flex justify-center items-center`}>
            <div className={tw`bg-white p-8 max-w-md w-full shadow-lg rounded-lg`}>
              <h2 className={tw`text-2xl font-bold mb-6 text-center`}>
                Cadastre-se
              </h2>
              <form>
                <div className={tw`mb-4`}>
                  <label className={tw`block text-sm font-medium text-gray-700`} htmlFor="name">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={tw`mt-1 p-3 w-full border border-gray-300 rounded-md`}
                    placeholder="Digite seu nome"
                  />
                </div>

                <div className={tw`mb-4`}>
                  <label className={tw`block text-sm font-medium text-gray-700`} htmlFor="email">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={tw`mt-1 p-3 w-full border border-gray-300 rounded-md`}
                    placeholder="Digite seu e-mail"
                  />
                </div>

                <div className={tw`mb-6`}>
                  <label className={tw`block text-sm font-medium text-gray-700`} htmlFor="password">
                    Senha
                  </label>
                  <input
                    id="password"
                    type="password"
                    className={tw`mt-1 p-3 w-full border border-gray-300 rounded-md`}
                    placeholder="Digite sua senha"
                  />
                </div>

                <button
                  type="submit"
                  className={tw`w-full py-3 bg-teal-400 text-black rounded-lg hover:bg-teal-500`}
                >
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
