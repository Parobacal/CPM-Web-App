import React, {Component} from 'react';
import Navigation from '../components/navbar';
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import swal from 'sweetalert';



const url = "/country/";

class Country extends Component{
    state = {
        data: [],
        modalInsert: false,
        modalDelete: false,
        form: {
            IDENTIFICADOR: '',
            PAIS: '',
            POBLACION: '',
            AREA: '',
            CAPITAL: '',
            REGION: '',
            modal: ''
        }
    }

    showalert = () => {
        swal({
            title: "Error",
            text: "Uno o varios campos son incorrectos.",
            icon: "error",
            button: "Aceptar"
        });
    }

    modalInsert = () => {
        this.setState({modalInsert: !this.state.modalInsert});
    }

    selectcountry = (country) => {
        this.setState({
            modal: 'update',
            form: {
                IDENTIFICADOR: country.IDENTIFICADOR,
                PAIS: country.PAIS,
                POBLACION: country.POBLACION,
                AREA: country.AREA,
                CAPITAL: country.CAPITAL,
                REGION: country.REGION
            }
        })
    }

    handleChange=async e=>{
        e.persist();
        await this.setState({
          form:{
            ...this.state.form,
            [e.target.name]: e.target.value
          }
        });
        console.log(this.state.form);
    }

    getcountries = () => {
        axios.get(url + 'all')
        .then(response => {
            this.setState({data: response.data});
        }).catch(error=>{
            console.log(error.message);
        })
    }

    updatecountry = () =>{
        axios.put(url+ 'update/' + this.state.form.IDENTIFICADOR, this.state.form).then(response=>{
          this.modalInsert();
          this.getcountries();
        }).catch(error=>{
            this.showalert();
            console.log(error.message);
        })
      }

    insertcountry = async () => {
        delete this.state.form.IDENTIFICADOR;
       await axios.post(url + 'new',this.state.form).then(response=>{
          this.modalInsert();
          this.getcountries();
        }).catch(error=>{
          console.log(error.message);
        })
      }

      deletecountry = () => {
        axios.delete(url+ 'delete/' + this.state.form.IDENTIFICADOR).then(response=>{
          this.setState({modalDelete: false});
          this.getcountries();
        }).catch(error=>{
            console.log(error.message);
        })
      }      

    componentDidMount(){
        this.getcountries();
    }

    render() { 
        const {form} = this.state;
        return (
            <div>
                <Navigation />
                <br />
                <div className="container text-center text-secondary">
                    <h1 className="display-6">Paises registrados</h1>
                </div>
                <hr className="container col-md-11"/>
                <br />
                <div className="container">
                <button className="btn btn-success" onClick={()=>{this.setState({form: null, modal: 'insert'}); this.modalInsert()}}> Agregar país </button>
                </div>
                <br />
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Nombre</th>
                            <th>Población</th>
                            <th>Área</th>
                            <th>Capital</th>
                            <th>Región</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(country => {
                            return(
                                <tr>
                                <td>{country.IDENTIFICADOR}</td>
                                <td>{country.PAIS}</td>
                                <td>{country.POBLACION}</td>
                                <td>{country.AREA}</td>
                                <td>{country.CAPITAL}</td>
                                <td>{country.REGION}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => {this.selectcountry(country); this.modalInsert()}}><FontAwesomeIcon icon={faEdit}/></button>
                                    {"  "}
                                    <button className="btn btn-danger" onClick={() => {this.selectcountry(country); this.setState({modalDelete: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
                <Modal isOpen={this.state.modalInsert}>
                    <ModalHeader style = {{display: 'block'}}>
                        <span style = {{float: 'right'}}>País</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="IDENTIFICADOR">Identificador</label>
                            <input className="form-control" type="text" name="IDENTIFICADOR" id="IDENTIFICADOR" readOnly onChange={this.handleChange} value={form?form.IDENTIFICADOR:''}/>
                            <br />
                            <label htmlFor="PAIS">País</label>
                            <input className="form-control" type="text" name="PAIS" id="PAIS" onChange={this.handleChange} value={form?form.PAIS:''}/>
                            <br />
                            <label htmlFor="POBLACION">Poblacion</label>
                            <input className="form-control" type="text" name="POBLACION" id="POBLACION" onChange={this.handleChange} value={form?form.POBLACION:''}/>
                            <br />
                            <label htmlFor="AREA">Área</label>
                            <input className="form-control" type="text" name="AREA" id="AREA" onChange={this.handleChange} value={form?form.AREA:''}/>
                            <br />
                            <label htmlFor="CAPITAL">Capital</label>
                            <input className="form-control" type="text" name="CAPITAL" id="CAPITAL" onChange={this.handleChange} value={form?form.CAPITAL:''}/>
                            <br />
                            <label htmlFor="REGION">Región</label>
                            <input className="form-control" type="text" name="REGION" id="REGION" onChange={this.handleChange} value={form?form.REGION:''}/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.modal == 'insert'?
                        <button className="btn btn-success" onClick={()=>this.insertcountry()}>
                            Agregar
                        </button>:<button className="btn btn-primary" onClick={() => this.updatecountry()}>
                            Actualizar
                        </button>
                        }
                        <button className="btn btn-danger" onClick={()=>this.modalInsert()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalDelete}>
                    <ModalBody>
                        ¿Está seguro de eliminar el país: {form && form.PAIS}?
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick = {() => this.deletecountry()}>Sí</button>
                        <button className="btn btn-secondary" onClick={() => this.setState({modalDelete: false})}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Country;