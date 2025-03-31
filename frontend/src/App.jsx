import React from 'react';
import '../src/App.css'; 
import { tw } from 'twind';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <Header />
      <Hero/>
    </>
  );
};

export default App;
