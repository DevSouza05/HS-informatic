import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Cadastrar from './pages/Cadastrar';
import Login from './pages/Login';
import Hero from './components/Hero';



const App = () => {
  return (
    <Router>
      <div>
        {/* Navegação */}
        <nav>
          <ul>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* Definindo as rotas */}
        <Routes>
          <Route 
            path="/cadastro" 
            element={<Hero formType="cadastro" />}  // Passando prop formType
          />
          <Route 
            path="/login" 
            element={<Hero formType="login" />}  // Passando prop formType
          />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
