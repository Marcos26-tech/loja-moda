import React, { useState } from 'react';
import styled from 'styled-components';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';
import carrocel from '../img/img_home/carrocel.jpg';
import carrocel2 from '../img/img_home/carrocel2.jpg';
import carrocel3 from '../img/img_home/carrocel3.jpg';
import carrocel4 from '../img/img_home/carrocel4.jpg';
import carrocel5 from '../img/img_home/carrocel5.jpg';
import carrocel6 from '../img/img_home/carrocel6.jpg';
import carrocel8 from '../img/img_home/carrocel8.jpg';
import carrocel9 from '../img/img_home/carrocel9.jpg';
import carrocel10 from '../img/img_home/carrocel10.jpg';
import carrocel11 from '../img/img_home/carrocel11.jpg';
import carrocel12 from '../img/img_home/carrocel12.jpg';
import carrocel13 from '../img/img_home/carrocel13.jpg';
import carrocel14 from '../img/img_home/carrocel14.jpg';



const StyledCarrocelContainer = styled.div`
  height:95%;
  width:55%;
  padding-left:5%;
  margin:auto;
  display: flex;
  justify-content: center;
  align-items:center;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 80%; 
  border-radius:5%;
`;
const StyledArrowContainer = styled.div`
  font-size: 35px;
  width:50px;
  height:50px;
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius:50%;
  cursor: pointer;
  :hover{
    background-color:#d9d9d9;
  }

`;

const StyledImage = styled.img`
  width: 100%;
  height:100%;
`;


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