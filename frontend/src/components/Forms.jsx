import { useState } from "react";
import { tw } from "twind";
import { useNavigate } from "react-router-dom";


const Form = ({ formType = "register" }) => {
  const isRegister = formType === "register";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = isRegister
      ? { name, email, password }
      : { email, password };

    try {
      const response = await fetch(
        isRegister ? "http://localhost:5000/cadastro" : "http://localhost:5000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.status === "Sucesso") {
        if (!isRegister) {
          localStorage.setItem("token", data.token); 
          navigate("/loggedIn"); 
        } else {
          setResponseMessage("Cadastro realizado com sucesso!");
        }
      } else {
        setResponseMessage(data.message || "Erro ao processar, tente novamente.");
      }
    } catch (error) {
      setResponseMessage("Erro ao enviar os dados. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={tw`w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-green-50 to-white`}>
      <div className={tw`bg-white p-10 max-w-md w-full shadow-xl rounded-2xl border border-green-100`}>
        <h2 className={tw`text-3xl font-bold mb-6 text-center text-green-700`}>
          {isRegister ? "Cadastre-se" : "Login"}
        </h2>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className={tw`mb-5`}>
              <label className={tw`block text-sm font-medium text-gray-700`} htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                type="text"
                className={tw`mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300`}
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className={tw`mb-5`}>
            <label className={tw`block text-sm font-medium text-gray-700`} htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className={tw`mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300`}
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={tw`mb-6`}>
            <label className={tw`block text-sm font-medium text-gray-700`} htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className={tw`mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300`}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {responseMessage && (
            <p className={tw`text-center text-sm text-red-500 mb-4`}>
              {responseMessage}
            </p>
          )}

          <button
            type="submit"
            className={tw`w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300`}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? isRegister
                ? "Cadastrando..."
                : "Entrando..."
              : isRegister
              ? "Cadastrar"
              : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
