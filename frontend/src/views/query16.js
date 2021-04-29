import React, {Component} from 'react';
import Navigation from '../components/navbar';
import axios from 'axios';

class Query16 extends Component{

    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.getquery = this.getquery.bind(this);
    }

    getquery = async () => {
        let data = await axios.get('/querys/q16')
        .then(response => {
            return response;
        });
        this.setState({ trows: data.data});
    }

    componentDidMount(){
        this.getquery();
    }

    render() { 
        const { trows } = this.state;
        return (
            <div>
                <Navigation />
                <br />
                <div className="text-center">
                    <h1><small className="text-muted">Consulta #16</small></h1>
                </div>
                <br />
                <div className="container">
                <table className="table table-striped table-hover">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Profesional</th>
                        <th scope="col">Jefe de área</th>
                        <th scope="col">Área</th>
                        <th scope="col">Jefe general</th>
                    </tr>
                </thead>
                <tbody>
                {trows &&
                    trows.map(trow => {
                        return (
                            <tr>
                            <td>{trow.PROFESIONAL}</td>
                            <td>{trow.JEFE_PROFESIONAL}</td>
                            <td>{trow.AREA}</td>
                            <td>{trow.JEFE_GENERAL}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default Query16;