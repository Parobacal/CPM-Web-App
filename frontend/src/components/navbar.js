import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
                <a className="navbar-brand" href="#">
                <img src="https://i.imgur.com/Uoqb4j1.png" width="50" height="50" className="d-inline-block align-top" alt=""/>
                
                </a>               
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Paises</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Preguntas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inventos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Respuestas</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Consultas
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Consulta 1</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;