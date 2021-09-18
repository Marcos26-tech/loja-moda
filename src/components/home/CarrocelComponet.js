import React, { useState } from 'react';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';

import carrocel from '../../img/img_home/carrocel.jpg';
import carrocel2 from '../../img/img_home/carrocel2.jpg';
import carrocel3 from '../../img/img_home/carrocel3.jpg';
import carrocel4 from '../../img/img_home/carrocel4.jpg';
import carrocel5 from '../../img/img_home/carrocel5.jpg';
import carrocel6 from '../../img/img_home/carrocel6.jpg';
import carrocel8 from '../../img/img_home/carrocel8.jpg';
import carrocel9 from '../../img/img_home/carrocel9.jpg';
import carrocel10 from '../../img/img_home/carrocel10.jpg';
import carrocel11 from '../../img/img_home/carrocel11.jpg';
import carrocel12 from '../../img/img_home/carrocel12.jpg';
import carrocel13 from '../../img/img_home/carrocel13.jpg';
import carrocel14 from '../../img/img_home/carrocel14.jpg';


import {StyledCarrocelContainer} from './style_home';
import {StyledImageContainer} from './style_home';
import {StyledArrowContainer} from './style_home';
import {StyledImage} from './style_home';


const imagens =[carrocel13,carrocel,carrocel14,carrocel2,carrocel3,carrocel4,
  carrocel5,carrocel6,carrocel8,carrocel9,carrocel10,carrocel11,carrocel12,
];

const CarrocelComponent = () => {
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

export default CarrocelComponent