import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
                <a className="navbar-brand" href="/home">
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
                        <a className="dropdown-item" href="/query1">Consulta 1</a>
                        <a className="dropdown-item" href="/query2">Consulta 2</a>
                        <a className="dropdown-item" href="/query3">Consulta 3</a>
                        <a className="dropdown-item" href="/query4">Consulta 4</a>
                        <a className="dropdown-item" href="/query5">Consulta 5</a>
                        <a className="dropdown-item" href="/query6">Consulta 6</a>
                        <a className="dropdown-item" href="/query7">Consulta 7</a>
                        <a className="dropdown-item" href="/query8">Consulta 8</a>
                        <a className="dropdown-item" href="/query9">Consulta 9</a>
                        <a className="dropdown-item" href="/query10">Consulta 10</a>
                        <a className="dropdown-item" href="/query11">Consulta 11</a>
                        <a className="dropdown-item" href="/query12">Consulta 12</a>
                        <a className="dropdown-item" href="/query13">Consulta 13</a>
                        <a className="dropdown-item" href="/query14">Consulta 14</a>
                        <a className="dropdown-item" href="/query15">Consulta 15</a>
                        <a className="dropdown-item" href="/query17">Consulta 17</a>
                        <a className="dropdown-item" href="/query18">Consulta 18</a>
                        <a className="dropdown-item" href="/query20">Consulta 20</a>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;