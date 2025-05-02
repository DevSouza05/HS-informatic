import React from "react";
import Form from "../components/Forms";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <Form formType="login" />
      <Footer />
    </>
  );
};

export default Login;
