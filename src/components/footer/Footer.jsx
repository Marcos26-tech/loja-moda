import React from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
const StyledFooter = styled.footer`
   width: auto;
=======
const StyledFooter= styled.footer`
   width:100%;
>>>>>>> f2a286c9d47bbbd09d72e629beffc3e19dd75714
   text-align: center;
   background: linear-gradient(hsl(108, 48%, 74%), transparent);
   padding:0.2%;
   p {
   font-size: 15px;
   color: rgb(0, 0, 0);
   }
   @media(max-width:780px){
      width:100%;
      margin-top:55px;
      text-align: center;
   }
`;

const Footer = () => {

   return (
      <>
         <StyledFooter>
            <p> Copyright &copy; Grupo Panace I.A 2021 </p>
         </StyledFooter>
      </>
<<<<<<< HEAD
   );
}
=======
   )
}
export default Footer;
>>>>>>> f2a286c9d47bbbd09d72e629beffc3e19dd75714
