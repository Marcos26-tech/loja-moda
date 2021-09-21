import React, { useState } from 'react';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

import Calca from '../../img/imgmasculina/calca.jpg';
import Camiseta from '../../img/imgmasculina/camiseta.jpg';
import Camiseta1 from '../../img/imgmasculina/camiseta1.jpg';


import {StyledCarrocelContainer, StyledImageContainer, StyledArrowContainer, StyledImage } from './StyledMasculino';

const imagens = [Calca, Camiseta, Camiseta1 ]

const CarrosselMasculino2  = () => {

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
export default CarrosselMasculino2 ;