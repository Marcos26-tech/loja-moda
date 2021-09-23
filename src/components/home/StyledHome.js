import styled from "styled-components";

//inicio style da pagina home//
export const Section = styled.section`
  margin:1rem;
  padding: 2rem;
  text-align:center;
  justify-content: center;
`;
export const Title = styled.h1 ` 
  margin: 2px;
  padding: 1px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(12, 139, 1); 
  display: flex;
  text-align:center;
  justify-content: center;
`;

export const StyledContainer = styled.section`
  position: relative;
  display: flex;
`;

//inicio style da pagina carrocel//
export const StyledCarrocelContainer = styled.div`
  height: 40rem;
  width: 50rem;
  padding:0;
  padding-left:4rem;
  padding-bottom:6.5rem;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items:center;
  @media(max-width:780px){
    display:flex;
    width:100%;
    margin:auto;
    padding: 5px !important;
    }
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
  border-radius:10%;
`;
