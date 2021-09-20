import React, { useState, Component} from 'react';
import Sobre from '../sobre/Sobre';
import Home from '../home/Home'
import ModaMasculina from '../modamasculina/ModaMasculina';
import ModaFeminina from '../modafeminina/ModaFeminina';
import ModaInfantil from '../modainfantil/ModaInfantil';

import {StyledContainer, Nav, Lista, Navbar, Lis} from './Stylemenu';


function Menu() {

    const [componente, setComponente] = useState(<Home/>)

    return (
        <>
            <StyledContainer>
                <div>
                    <Nav>
                        <Navbar>
                            <Lista><Lis href="#home" onClick={() => setComponente(<Home />)}>Home</Lis></Lista>
                            <Lista><Lis href="#modamasculina" onClick={() => setComponente(<ModaMasculina />)}>Moda Masculina</Lis></Lista>
                            <Lista><Lis href="#modafeminina" onClick={() => setComponente(<ModaFeminina />)}>Moda Feminina</Lis></Lista>
                            <Lista><Lis href="#modainfantil" onClick={() => setComponente(<ModaInfantil />)}>Moda Infantil</Lis></Lista>
                            <Lista><Lis href="#Sobre" onClick={() => setComponente(<Sobre />)}>Sobre</Lis></Lista>
                        </Navbar>
                    </Nav>
                </div>
            </StyledContainer>
            <section>
                {componente}
            </section>
        </>
    )
}

export default Menu;