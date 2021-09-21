import styled from "styled-components";

//inicio style da pagina Feminina//
export const Section = styled.section`
  margin: 20px;
  padding: 1px; 
`;
export const Title = styled.h1 ` 
  margin: 2px;
  padding: 1px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(12, 139, 1); 
  display: flex;
  text-align:center;
  justify-content: center;
`;

export const StyledContainer = styled.section`
  padding: 10px;
  display: flex;
  justify-content:space-evenly;
  margin: 0;
  margin-bottom:10px;
`;

//inicio style da pagina carrocelfeminina//
export const StyledCarrocelContainer = styled.div`
  height: 500px;
  width: 27vw;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;  
`;

export const StyledArrowContainer = styled.div`
  font-size: 35px;
  width:30px;
  height:30px;
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius:50%;
  cursor: pointer;
  &:hover{
    background-color:#d9d9d9;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height:100%; 
`;
