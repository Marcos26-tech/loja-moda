import styled from "styled-components";


//inicio style da pagina home//
export const Section1 = styled.section`
  margin: 10px;
  padding: 10px;
  text-align:center;
  justify-content: center;
`;
export const Title = styled.h1 ` 
  font-size: 30px;
  font-weight: bold;
  color: rgb(12, 139, 1); 
  display: flex;
  text-align:center;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  position: relative;
`;


//inicio style da pagina carrocel//
export const StyledCarrocelContainer = styled.div`
  height:95%;
  width:55%;
  padding-left:5%;
  margin:auto;
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 80%; 
  border-radius:5%;
`;

export const StyledArrowContainer = styled.div`
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

export const StyledImage = styled.img`
  width: 100%;
  height:100%;
`;
