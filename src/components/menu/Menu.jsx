import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Menu.css';


class Menu extends Component {
    state = { clicked: false}

    handleclick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="menu">
                <div className="menu-icon" onClick={this.handleclick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className="menu-itens">
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Menu