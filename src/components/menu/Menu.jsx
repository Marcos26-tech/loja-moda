import React from 'react';
import { Link } from 'react-router-dom'
import { Nav } from './StyleMenu';

const Menu = () => {

    return (
        <>
            <Nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/modaMasculina'>Moda Masculina</Link></li>
                    <li><Link to='/modaFeminina'>Moda Feminina</Link></li>
                    <li><Link to='/modaInfantil'>Moda Infantil</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                </ul>
            </Nav>   
        </>
    )
}
export default Menu;