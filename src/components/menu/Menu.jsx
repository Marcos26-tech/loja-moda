import React, { useState } from 'react'
import Sobre from '../sobre/Sobre'
import Home from '../home/Home'
import ModaMasculina from '../modamasculina/ModaMasculina'
import ModaFeminina from '../modafeminina/ModaFeminina'
import ModaInfantil from '../modainfantil/ModaInfantil'



export default function Header() {

    const [componente, setComponente] = useState(<Home />)


    return (
        <>
            <header>
                <nav className="">
                    <ul>
                        <li><a href="#home" onClick={() => setComponente(<Home />)}>Home</a></li>
                        <li><a href="#modamasculina" onClick={() => setComponente(<ModaMasculina/>)}>Moda Masculina</a></li>
                        <li><a href="#modafeminina" onClick={() => setComponente(<ModaFeminina />)}>Moda Feminina</a></li>
                        <li><a href="#modainfantil" onClick={() => setComponente(<ModaInfantil/>)}>Moda Infantil</a></li>
                        <li><a href="#sobre" onClick={() => setComponente(<Sobre/>)}>Sobre</a></li>
                    </ul>
                </nav>
        
            </header>
            <div>
                {componente}
            </div>
        </>
    )
}