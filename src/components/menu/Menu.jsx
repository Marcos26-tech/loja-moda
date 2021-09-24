import React from 'react';
import { Link } from 'react-router-dom'
import {Nav} from './StyleMenu';

const Menu = () => {

    return (
        <>
            <Nav>
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/ModaMasculina'>Moda Maculina</Link></li>
                    <li><Link to='/ModaFeminina'>Moda Feminina</Link></li>
                    <li><Link to='/ModaInfantil'>Moda Infantil</Link></li>
                    <li><Link to='/Sobre'>Sobre</Link></li>
                </ul>
            </Nav>   
        </>
    )
}
export default Menu;