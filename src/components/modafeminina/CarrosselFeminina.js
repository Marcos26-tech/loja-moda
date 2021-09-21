import React, { useState } from 'react';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

import Capa from '../../img/imgfeminina/capafeminina.jpg';
import Blusa from '../../img/imgfeminina/blusa.jpg';
import Cachecol from '../../img/imgfeminina/cachecol.jpg';
import Calca from '../../img/imgfeminina/calca.jpg';
import Jaqueta from '../../img/imgfeminina/jaqueta.jpg';
import Short from '../../img/imgfeminina/short.jpg';
import Vestido1 from '../../img/imgfeminina/vestido1.jpg';
import Vestido2 from '../../img/imgfeminina/vestido2.jpg';
import Vestido3 from '../../img/imgfeminina/vestido3.jpg';
import Vestido4 from '../../img/imgfeminina/vestido4.jpg';
import Vestido5 from '../../img/imgfeminina/vestido5.jpg';


import {StyledCarrocelContainer, StyledImageContainer, StyledArrowContainer, StyledImage } from './StyleFeminana';

const imagens = [Blusa, Cachecol, Calca, Jaqueta, Short, Vestido1, Vestido2,
   Vestido3, Vestido4, Vestido5]


const CarrosselFeminina  = () => {

  const [mudarImageIndex, setMudarImageIndex]= useState(0);

  const nextImage = () =>{
      setMudarImageIndex(primeiroIndex => primeiroIndex + 1);
  };

  const preImage = ()=>{
    setMudarImageIndex(primeiroIndex => primeiroIndex - 1);
  };

  return(
    <StyledCarrocelContainer>
      {mudarImageIndex !== 0 && (
         <StyledArrowContainer onClick={preImage}>
        <MdKeyboardArrowLeft />
      </StyledArrowContainer>
      )}
      <StyledImageContainer>
        <StyledImage src={imagens[mudarImageIndex]}/>
      </StyledImageContainer>
      {mudarImageIndex !== imagens.length -1 && ( 
      <StyledArrowContainer onClick={nextImage}>
        <MdKeyboardArrowRight />
      </StyledArrowContainer>
      )} 
    </StyledCarrocelContainer>
  );
}
export default CarrosselFeminina ;