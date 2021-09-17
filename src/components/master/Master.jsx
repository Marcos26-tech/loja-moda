import React from 'react';
import Sobre from '../sobre/Sobre'
import Home from '../home/Home'
import ModaMasculina from '../modamasculina/ModaMasculina'
import ModaFeminina from '../modafeminina/ModaFeminina'
import ModaInfantil from '../modainfantil/ModaInfantil'
import Header from './components/header/Header';


export default () => {


  const navegador = navigator.userAgent
  
  return(
    <div className="container">
          <Header />
          <p>NAVEGADOR : {navegador}</p>
      </div>
  );
}