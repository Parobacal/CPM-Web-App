import React, {Component} from 'react';
import Navigation from '../components/navbar';
import axios from 'axios';

class Query5 extends Component{

    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.getquery = this.getquery.bind(this);
    }

    getquery = async () => {
        let data = await axios.get('http://localhost:8000/querys/q5')
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
                <div className="text-center">
                    <h1><small className="text-muted">Consulta #5</small></h1>
                </div>
                <table className="table table-striped table-hover">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Profesional</th>
                        <th scope="col">Área</th>
                        <th scope="col">Salario</th>
                        <th scope="col">Salario promedio</th>
                    </tr>
                </thead>
                <tbody>
                {trows &&
                    trows.map(trow => {
                        return (
                            <tr>
                            <td>{trow.PROFESIONAL}</td>
                            <td>{trow.AREA}</td>
                            <td>{trow.SALARIO}</td>
                            <td>{trow.SALARIO_PROMEDIO}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
        );
    }
}

export default Query5;