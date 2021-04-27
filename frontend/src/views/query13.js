import React, {Component} from 'react';
import Navigation from '../components/navbar';
import axios from 'axios';

class Query13 extends Component{

    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.getquery = this.getquery.bind(this);
    }

    getquery = async () => {
        let data = await axios.get('/querys/q13')
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
                    <h1><small className="text-muted">Consulta #13</small></h1>
                </div>
                <table className="table table-striped table-hover">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Profesional</th>
                        <th scope="col">Salario</th>
                        <th scope="col">Comisión</th>
                        <th scope="col">Salario total</th>
                    </tr>
                </thead>
                <tbody>
                {trows &&
                    trows.map(trow => {
                        return (
                            <tr>
                            <td>{trow.PROFESIONAL}</td>
                            <td>{trow.SALARIO}</td>
                            <td>{trow.COMISION}</td>
                            <td>{trow.TOTAL_SALARIO}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
        );
    }
}

export default Query13;