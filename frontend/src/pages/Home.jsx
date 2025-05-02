import React from "react";
import { Outlet } from "react-router-dom";
import { tw } from "twind";
import Header from "../components/Header";


const Home = () => {
  return (
    <div className={tw`min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col`}>
      <Header />

      <main className={tw`flex-grow flex items-center justify-center`}>
        <Outlet />
      </main>


    </div>
  );
};

export default Home;
