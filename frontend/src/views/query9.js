import React, {Component} from 'react';
import Navigation from '../components/navbar';
import axios from 'axios';

class Query9 extends Component{

    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.getquery = this.getquery.bind(this);
    }

    getquery = async () => {
        let data = await axios.get('/querys/q9')
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
                    <h1><small className="text-muted">Consulta #9</small></h1>
                </div>
                <br />
                <div className="container">
                <table className="table table-striped table-hover">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Inventor</th>
                        <th scope="col">Invento</th>
                    </tr>
                </thead>
                <tbody>
                {trows &&
                    trows.map(trow => {
                        return (
                            <tr>
                            <td>{trow.INVENTOR}</td>
                            <td>{trow.INVENTO}</td>
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

export default Query9;