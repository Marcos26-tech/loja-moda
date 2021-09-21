import React, { useState } from 'react';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

import Camiseta from '../../img/imgmasculina/camiseta1.jpg';
import Camiseta1 from '../../img/imgmasculina/camiseta2.jpg';
import Camiseta2 from '../../img/imgmasculina/camiseta3.jpg';


import {StyledCarrocelContainer, StyledImageContainer, StyledArrowContainer, StyledImage } from './StyledMasculino';

const imagens = [Camiseta, Camiseta1, Camiseta2 ]

const CarrosselMasculino1  = () => {

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
export default CarrosselMasculino1 ;