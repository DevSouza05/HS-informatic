import { useState } from "react";
import { tw } from "twind";

const Form = ({ formType = "register" }) => {
  const isRegister = formType === "register";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = isRegister
      ? { name, email, password }
      : { email, password };

    try {
      const response = await fetch(
        isRegister ? "http://localhost:5000/users" : "http://localhost:5000/login",
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
        setResponseMessage(
          isRegister
            ? "Cadastro realizado com sucesso!"
            : "Login efetuado com sucesso!"
        );
      } else {
        setResponseMessage("Erro ao processar, tente novamente.");
      }
    } catch (error) {
      setResponseMessage("Erro ao enviar os dados. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={tw`w-full min-h-screen flex justify-center items-center bg-gray-100`}>
      <div className={tw`bg-white p-8 max-w-md w-full shadow-lg rounded-lg`}>
        <h2 className={tw`text-2xl font-bold mb-6 text-center`}>
          {isRegister ? "Cadastre-se" : "Login"}
        </h2>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className={tw`mb-4`}>
              <label
                className={tw`block text-sm font-medium text-gray-700`}
                htmlFor="name"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                className={tw`mt-1 p-3 w-full border border-gray-300 rounded-md`}
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className={tw`mb-4`}>
            <label
              className={tw`block text-sm font-medium text-gray-700`}
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className={tw`mt-1 p-3 w-full border border-gray-300 rounded-md`}
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={tw`mb-6`}>
            <label
              className={tw`block text-sm font-medium text-gray-700`}
              htmlFor="password"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              className={tw`mt-1 p-3 w-full border border-gray-300 rounded-md`}
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
            className={tw`w-full py-3 bg-teal-400 text-black rounded-lg hover:bg-teal-500`}
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
