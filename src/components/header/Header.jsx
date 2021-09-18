import React from 'react'
import Logo from '../../img/grupo/logo.png'
import Menu from '../menu/Menu'
import './Header.css'
import styled from 'styled-components';


export default function Header() {

   return (
      <> 
         <header> 
            <div className="caixaLogo">
               <div className="logo">
                  <img src={Logo} alt="logo do site"></img>
                  <h1> Loja de Moda Panace IA</h1>
               </div>
            </div>
            <Menu/>
            
         </header>  
      </>
   )
}