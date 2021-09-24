import styled from "styled-components";

//inicio style da pagina ModaFeminina//
export const Section = styled.section`
  margin:15px;
  padding:25px; 
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
  a{
    color: rgb(145, 6, 29);
    margin-left:5px;
    text-decoration: none
 }
`;

export const Titles = styled.h1`
  color: rgb(145, 6, 29);
  margin: 2px;
  padding: 1px;
  font-size: 20px;
  font-weight: bold;
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
  @media(max-width:780px){
    display:block;
    width:100%;
    margin:0px;
    padding:0px;
  };
`;

//inicio style da pagina carrocelFeminino//
export const StyledCarrocelContainer = styled.div`
  height: 500px;
  width: 27vw;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items:center;
  @media(max-width:780px){
    width:100%;
    padding:0px;
    margin:0;
  };
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
    color: rgb(74, 85, 85); 
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height:100%;  
`;

export const StyledTitulo = styled.h1`
  text-align: center;
  font-size: 18px;
  margin-top:5rem;
  @media(max-width:780px){
    margin-top:19rem;
    font-size:25px;
    width:100%;
    padding:0px;
  };
`;



//inicio do style do icone das pag//
export const Span= styled.span`
    .tw-heart {
    background: url(http://i.imgur.com/zw8ahUb.png) no-repeat 0 0;
    left: 100px;
    top: 100px;}
    margin:0 auto;
    position: relative;
    width: 85px;
    height: 85px;
    display: block;

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