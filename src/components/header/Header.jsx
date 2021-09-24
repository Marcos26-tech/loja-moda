import React from 'react'
import Logo from '../../img/grupo/logo.png'
import Menu from '../menu/Menu'
import styled from 'styled-components';


const StyledHeader = styled.header`
   width: 100%;
   background-color: #48a048;
   height: 110px;
   img {
      height: 100px;
      width: 100px;
      padding: 10px;
      @media(max-width:780px){
      align-items:center;
      padding-left:19%;}
   } 
`;

const Stylednovo = styled.div`
   display: flex;
   justify-content:center;
   p {
      margin:0;
      padding-top:2rem;
      font-size:30px;
      font-weight:bold;
         @media(max-width:780px){
         width:100%;
         font-size:25px;   
      } 
   }
`;

 const Header = () => {

   return (
      <> 
         <StyledHeader>
            <Stylednovo>
               <img src={Logo} alt="logo do site"></img>
               <p> Loja de Moda Panace IA</p>
            </Stylednovo>
         </StyledHeader>

         <Menu/>
      </>
   )
}
export default Header;
