import React, {Component} from 'react';
import Navigation from '../components/navbar';
import axios from 'axios';

class Query4 extends Component{

    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.getquery = this.getquery.bind(this);
    }

    getquery = async () => {
        let data = await axios.get('/querys/q4')
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
                    <h1><small className="text-muted">Consulta #4</small></h1>
                </div>
                <table className="table table-striped table-hover">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Jefe profesional</th>
                        <th scope="col">Profesional subalterno</th>
                    </tr>
                </thead>
                <tbody>
                {trows &&
                    trows.map(trow => {
                        return (
                            <tr>
                            <td>{trow.PROFESIONAL_JEFE}</td>
                            <td>{trow.PROFESIONAL_SUBALTERNO}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
        );
    }
}

export default Query4;