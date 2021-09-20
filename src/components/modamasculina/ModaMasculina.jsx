import React from 'react';
import styled from 'styled-components';

import Capa from '../../img/imgmasculina/capamasculina.jpg';
import Calca from '../../img/imgmasculina/calca.jpg';



export default () => {

  

  return(
    <>
      <div>
        <div>
          <img src={Capa} alt="Capa da pagina"></img>
        </div>

        <div>
          <img src={Calca}onclick={''}></img>
          <div> 
            <h1>Calça Jeans</h1>
            <h2>Tamanhos Disponiveis:</h2>
            <p> P M G GG</p>
          </div>

        </div> 
      </div>
    </>
  );
}







