import React, { useState } from 'react';

import Capa from '../../img/imgmasculina/capamasculina.jpg';
import Calca from '../../img/imgmasculina/calca.jpg';
import Camiseta from '../../img/imgmasculina/camiseta.jpg';
import Camiseta1 from '../../img/imgmasculina/camiseta1.jpg';
import Camiseta2 from '../../img/imgmasculina/camiseta3.jpg';
import Camiseta3 from '../../img/imgmasculina/camiseta4.jpg';
import Camiseta4 from '../../img/imgmasculina/camiseta5.jpg';
import Camiseta5 from '../../img/imgmasculina/camiseta6.jpg';
import Camiseta6 from '../../img/imgmasculina/camiseta7.jpg';
import Camiseta7 from '../../img/imgmasculina/camiseta8.jpg';
import Camiseta8 from '../../img/imgmasculina/camiseta9.jpg';
import Camiseta9 from '../../img/imgmasculina/camiseta10.jpg';

import { StyledSection, StyledSpam, StyledImage, StyledNovo, Img, ImgStyled} from './Styledmasculina';


export function ModaMasculina() {

  function changeDisplay(x) {
    if (x === 1) {
      document.getElementsByClassName("calca")[0].innerHTML += "<h1 >Camiseta Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 2) {
      document.getElementsByClassName("camiseta")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 3) {
      document.getElementsByClassName("camiseta1")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 4) {
      document.getElementsByClassName("camiseta2")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 5) {
      document.getElementsByClassName("camiseta3")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 6) {
      document.getElementsByClassName("camiseta4")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 7) {
      document.getElementsByClassName("camiseta5")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 8) {
      document.getElementsByClassName("camiseta6")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 9) {
      document.getElementsByClassName("camiseta7")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";

    } else if (x === 10) {
      document.getElementsByClassName("camiseta8")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";
    
    }  else if (x === 11) {
      document.getElementsByClassName("camiseta9")[0].innerHTML += "<h1 >Calca Jeans</h1>" + "<h2>Tamanhos Disponiveis: </h2>" +
        "<p> P M G GG</p>";
    
    } 
  };

  return (
    <>
      <StyledImage>
        <StyledNovo>
          <img src={Capa} alt="Capa da pagina"></img>
        </StyledNovo>
      </StyledImage>
      <StyledSection>  
        <div>
          <Img src={Calca} alt='calça masculina'></Img>
          <StyledSpam >
            <div className="calca">
              <button onClick={() => changeDisplay(1)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
        <div>
          <Img src={Camiseta} alt='camiseta masculina'></Img>
          <StyledSpam>
            <div className="camiseta">
              <button onClick={() => changeDisplay(2)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
        <div>
          <ImgStyled src={Camiseta1} alt='camiseta masculina'></ImgStyled>
          <StyledSpam>
            <div className="camiseta1">
              <button onClick={() => changeDisplay(3)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
        <div>
          <ImgStyled src={Camiseta2} alt='camiseta masculina'></ImgStyled>
          <StyledSpam>
            <div className="camiseta2">
              <button onClick={() => changeDisplay(4)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
        <div>
          <ImgStyled src={Camiseta3} alt='camiseta masculina'></ImgStyled>
          <StyledSpam>
            <div className="camiseta3">
              <button onClick={() => changeDisplay(5)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
        <div>
          <ImgStyled src={Camiseta4} alt='camiseta masculina'></ImgStyled>
          <StyledSpam>
            <div className="camiseta4">
              <button onClick={() => changeDisplay(6)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
        <div>
          <ImgStyled src={Camiseta5} alt='camiseta masculina'></ImgStyled>
          <StyledSpam>
            <div className="camiseta5">
              <button onClick={() => changeDisplay(7)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
        <div>
          <ImgStyled src={Camiseta6} alt='camiseta masculina'></ImgStyled>
          <StyledSpam>
            <div className="camiseta6">
              <button onClick={() => changeDisplay(8)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
        <div>
          <ImgStyled src={Camiseta7} alt='camiseta masculina'></ImgStyled>
          <StyledSpam>
            <div className="camiseta7">
              <button onClick={() => changeDisplay(9)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
        <div>
          <ImgStyled src={Camiseta8} alt='camiseta masculina'></ImgStyled>
          <StyledSpam>
            <div className="camiseta8">
              <button onClick={() => changeDisplay(10)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div> 
        <div>
          <ImgStyled src={Camiseta9} alt='camiseta masculina'></ImgStyled>
          <StyledSpam>
            <div className="camiseta9">
              <button onClick={() => changeDisplay(11)}>PARA MAIS INFORMAÇOES SOBRE O ITEM CLIQUE AQUI</button>
            </div>
          </StyledSpam>
        </div>
      </StyledSection>
    </>
  );
}
export default ModaMasculina;