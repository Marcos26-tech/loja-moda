import React, {useState} from 'react';
import styled from 'styled-components';

import Capa from '../../img/imgmasculina/capamasculina.jpg';
import Calca from '../../img/imgmasculina/calca.jpg';
import Camiseta from '../../img/imgmasculina/camiseta.jpg';
import Camiseta1 from '../../img/imgmasculina/camiseta1.jpg';
import Camiseta3 from '../../img/imgmasculina/camiseta3.jpg';
import Camiseta4 from '../../img/imgmasculina/camiseta4.jpg';
import Camiseta5  from '../../img/imgmasculina/camiseta5.jpg';
import Camiseta6  from '../../img/imgmasculina/camiseta6.jpg';
import Camiseta7  from '../../img/imgmasculina/camiseta7.jpg';
import Camiseta8  from '../../img/imgmasculina/camiseta8.jpg';
import Camiseta9  from '../../img/imgmasculina/camiseta9.jpg';
import Camiseta10  from '../../img/imgmasculina/camiseta10.jpg';





export default () => {

  const [ componente, setComponente] =useState ()


  return(
    <>
      <div>
        <div>
          <img src={Capa} alt="Capa da pagina"></img>
        </div>
        <div>
          <a href="#calca" onClick={()=> setComponente()}><img src={Calca} alt=" Imagem calca"></img></a> 
          <a href=""><img src={Camiseta} alt=""></img></a>
          <a href=""><img src={Camiseta1} alt=""></img></a>
          <a href=""><img src={Camiseta3} alt=""></img></a>
          <a href=""><img src={Camiseta4} alt=""></img></a>
          <a href=""><img src={Camiseta5} alt=""></img></a>
          <a href=""><img src={Camiseta6} alt=""></img></a>
          <a href=""><img src={Camiseta7} alt=""></img></a>
          <a href=""><img src={Camiseta8} alt=""></img></a>
          <a href=""><img src={Camiseta9} alt=""></img></a>
          <a href=""><img src={Camiseta10} alt=""></img></a>
        </div> 

        <section>
          {componente}
        </section>

      </div>
    </>
  );
}


