import React, { useState } from 'react';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

import Item from '../../img/imgfeminina/blusa.jpg';
import Item1 from '../../img/imgfeminina/blusa1.jpg';
import Item2 from '../../img/imgfeminina/blusa2.jpg';



import {StyledCarrocelContainer, StyledImageContainer, StyledArrowContainer, StyledImage } from './StyleFeminana';

const imagens = [Item, Item1, Item2 ]


const CarrosselFeminina3  = () => {

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
export default CarrosselFeminina3 ;