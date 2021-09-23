import styled from "styled-components";

//inicio style da pagina Feminina//
export const Section = styled.section`
  margin:5px;
  padding: 25px; 
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
  display: flex;
  padding: 5px;
  justify-content:space-evenly;
  margin: 0;
  margin-bottom:10px;
  @media(max-width:768px){
    display:block;
    align-items:center;
    width:100%;
  };
`;

//inicio style da pagina carrocelfeminina//
export const StyledCarrocelContainer = styled.div`
  height: 500px;
  width: 27vw;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items:center;
  @media(max-width:768px){
    display:flexbox;
    width:92%;
    padding:10px;
    margin:10px;
  };
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;  
  @media(max-width:768px){
    display:block;
    align-items:center;
    width:100%;
  };
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

export const StyledTitulo = styled.h1`
  text-align: center;
  font-size: 18px;
  margin-top:2rem;
`;


//inicio do style do icone das pag//
export const Span= styled.span`
    .tw-heart {
    background: url(http://i.imgur.com/zw8ahUb.png) no-repeat 0 0;
    left: 100px;
    top: 100px;}
    margin:0;
    padding-left:8rem;
    position: relative;
    width: 85px;
    height: 85px;
    display: inline-block;

  [type="checkbox"]:checked + .tw-heart {
    transition: background .8s steps(28);
    background-position: -2800px 0;
    animation:ease;
  }

  [type="checkbox"] {
    opacity: 0;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
export const IconeLike = styled.span`
    display: inline-block;
    width: 100%;
    height: 100%;
`;