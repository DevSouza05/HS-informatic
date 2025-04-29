import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cadastro from './pages/Cadastrar'
import Login from './pages/Login'
import Home from "./pages/Home"


const App = () => {
  return (
    <Router>
    
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/cadastro"  element={<Cadastro />} />
          <Route path="/login"  element={<Login />} />
          
        </Routes>
 
    </Router>

  );
};

export default App;
