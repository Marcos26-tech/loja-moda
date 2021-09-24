import React, { useState } from 'react';

import Capa from '../../img/imgmasculina/capamasculina.jpg';
import Calca from '../../img/imgmasculina/calca.jpg';
import Camiseta from '../../img/imgmasculina/camiseta.jpg';
import Camiseta1 from '../../img/imgmasculina/camiseta1.jpg';
import Camiseta3 from '../../img/imgmasculina/camiseta3.jpg';
import Camiseta4 from '../../img/imgmasculina/camiseta4.jpg';
import Camiseta5 from '../../img/imgmasculina/camiseta5.jpg';
import Camiseta6 from '../../img/imgmasculina/camiseta6.jpg';
import Camiseta7 from '../../img/imgmasculina/camiseta7.jpg';
import Camiseta8 from '../../img/imgmasculina/camiseta8.jpg';
import Camiseta9 from '../../img/imgmasculina/camiseta9.jpg';
import Camiseta10 from '../../img/imgmasculina/camiseta10.jpg';

import { StyledSection, Header, StyledSpam, StyledImage, StyledNovo } from './Styledmasculina';


export function ModaMasculina() {

  /* Marcos Ferreira - importante!!! Verificar uso dessas arrays */
  const listaCamiseta = [Camiseta1, Camiseta3, Camiseta4]
  const listaTipo = ["Polo", "Bone", "Casaco"]

  const todasImagens = listaCamiseta.map(
    (c, i) =>
      <img key={i} src={c}></img>);

  function changeDisplay(x) {
    if (x === 1) {
      document.getElementsByClassName("camiseta")[0].innerHTML += "<h1 >Camiseta Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 2) {
      document.getElementsByClassName("calca")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";
    }
  };


  return (
    <>
      <StyledSection>
        <StyledImage>
          <StyledNovo>
            <img src={Capa} alt="Capa da pagina"></img>
          </StyledNovo>
        </StyledImage>
        <div>
          <img src={Calca} alt='calça masculina'></img>
          <Header >
            <div className="camiseta">
              <button onClick={() => changeDisplay(1)}>AQUI É CLASS NAME CAMISETA</button>
            </div>
          </Header>
        </div>
        <div>
          <img src={Camiseta} alt='camiseta masculina'></img>
          <StyledSpam>
            <div className="calca">
              <button onClick={() => changeDisplay(2)}>AQUI É CLASS NAME CALCA</button>
            </div>
          </StyledSpam>
        </div>

      </StyledSection>
    </>
  );
}
export default ModaMasculina;