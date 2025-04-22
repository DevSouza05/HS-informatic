import { useState, useEffect } from "react";
import { tw } from "twind";



const Hero = () => {
  const [message, setMessage] = useState("");


  useEffect(() => {
    fetch("http://localhost:5000/Home")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Erro ao buscar dados: ", error));
  }, []);

  return (
    <>
    
      <div
        className={tw`relative bg-cover bg-center h-screen w-full`}
        style={{
          backgroundImage:
            'url("https://img.freepik.com/vetores-gratis/fundo-cibernetico-futurista-gradiente_23-2149117429.jpg?uid=R112632644&ga=GA1.1.907874342.1743096863&semt=ais_hybrid")',
        }}
      >
        <div className={tw`flex h-full`}>
     
          <div className={tw`w-1/2 flex justify-start items-center pl-16 z-10`}>
            <div
              className={tw`p-10 max-w-xl shadow-lg rounded-lg animate__animated animate__fadeIn`}
            >
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
                {message || "Transformamos seu negócio com soluções tecnológicas e inovadoras."}
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
      </div>
    </>
  );
};

export default Hero;
