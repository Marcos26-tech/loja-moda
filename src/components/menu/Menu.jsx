<<<<<<< HEAD
import React, { useState, Component } from 'react';
=======
import React, {useState} from 'react';
>>>>>>> f2a286c9d47bbbd09d72e629beffc3e19dd75714
import Sobre from '../sobre/Sobre';
import Home from '../home/Home'
import ModaMasculina from '../modamasculina/ModaMasculina';
import ModaFeminina from '../modafeminina/ModaFeminina';
import ModaInfantil from '../modainfantil/ModaInfantil';

<<<<<<< HEAD
import { Nav } from './Stylemenu';
=======
import {Nav} from './StyleMenu';
>>>>>>> f2a286c9d47bbbd09d72e629beffc3e19dd75714

const Menu = () => {

    const [componente, setComponente] = useState(<Home />)

    return (
        <>
            <header>
                <Nav>
                    <ul>
                        <li><a href="#home" onClick={() => setComponente(<Home />)}>Home</a></li>
                        <li><a href="#modamasculina" onClick={() => setComponente(<ModaMasculina />)}>Moda Masculina</a></li>
                        <li><a href="#modafeminina" onClick={() => setComponente(<ModaFeminina />)}>Moda Feminina</a></li>
                        <li><a href="#modainfantil" onClick={() => setComponente(<ModaInfantil />)}>Moda Infantil</a></li>
                        <li><a href="#Sobre" onClick={() => setComponente(<Sobre />)}>Sobre</a></li>
                    </ul>
                </Nav>
            </header>
            <section>
                {componente}
            </section>
        </>
    )
}
export default Menu;