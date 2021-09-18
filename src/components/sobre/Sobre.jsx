import React from 'react';
import '../sobre/Sobre.css';
import jojo from '../../img/grupo/jonathan.jpg';
import marcos from '../../img/grupo/MarcosMaciel.jpg';
import marcao from '../../img/grupo/MarcosVinicius.jpg';
import akemi from '../../img/grupo/Akemi.jpg';
import luan from '../../img/grupo/Luan.jpg';

export default () => {

  return(
    <>
        <div className="quadro">
            <div>
                <p className="tamanho">Somos um grupo de estudantes universitários do curso de Análise e Desenvolvimento de Sistemas denominado Panace I.A </p>
            </div>
            <div className="box2">
                <div className="card">
                    <img src={jojo} alt="Jonathan Felix"></img>
                    <h2>Jonathan Felix</h2>
                    <h3>Rm88082</h3>
                    <p>Back End</p>
                </div>
                <div className="card">
                    <img src={luan} alt="Laun de Oliveira"></img>
                    <h2>Luan de Oliveira</h2>
                    <h3>Rm89352</h3>
                    <p>Banco de Dados</p>
                </div>
                <div className="card">
                    <img src={marcos} alt="Marcos Maciel"></img>
                    <h2>Marcos Maciel</h2>
                    <h3>Rm88267</h3>
                    <p>AI & Chatbot</p>
                </div>
                <div className="card">
                    <img src={marcao} alt="Marcos Vinicius "></img>
                    <h2>Marcos Vinicius</h2>
                    <h3>Rm86904</h3>
                    <p>Gestor de Projetos</p>
                </div>
                <div className="card">
                    <img src={akemi} alt="Akemi"></img>
                    <h2>Vitoria Akemi</h2>
                    <h3>Rm88077</h3>
                    <p>Front End</p>
                </div>
            </div> 
        </div> 
    </>  
  );
}