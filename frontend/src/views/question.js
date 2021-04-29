import React, {Component} from 'react';
import Navigation from '../components/navbar';
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const url = "http://localhost:8000/question/";

class Question extends Component{
    state = {
        data: [],
        modalInsert: false,
        modalDelete: false,
        form: {
            IDENTIFICADOR: '',
            PREGUNTA: '',
            ENCUESTA: '',
            modal: ''
        }
    }

    modalInsert = () => {
        this.setState({modalInsert: !this.state.modalInsert});
    }

    selectquestion = (question) => {
        this.setState({
            modal: 'update',
            form: {
                IDENTIFICADOR: question.IDENTIFICADOR,
                PREGUNTA: question.PREGUNTA,
                ENCUESTA: question.ENCUESTA
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

    getquestions = () => {
        axios.get(url + 'all')
        .then(response => {
            this.setState({data: response.data});
        }).catch(error=>{
            console.log(error.message);
        })
    }

    updatequestion = () =>{
        axios.put(url+ 'update/' + this.state.form.IDENTIFICADOR, this.state.form).then(response=>{
          this.modalInsert();
          this.getquestions();
        }).catch(error=>{
            console.log(error.message);
        })
      }

    insertquestion = async () => {
        delete this.state.form.IDENTIFICADOR;
       await axios.post(url + 'new',this.state.form).then(response=>{
          this.modalInsert();
          this.getquestions();
        }).catch(error=>{
          console.log(error.message);
        })
      }

      deletequestion = () => {
        axios.delete(url+ 'delete/' + this.state.form.IDENTIFICADOR).then(response=>{
          this.setState({modalDelete: false});
          this.getquestions();
        }).catch(error=>{
            console.log(error.message);
        })
      }      

    componentDidMount(){
        this.getquestions();
    }

    render() { 
        const {form} = this.state;
        return (
            <div>
                <Navigation />
                <br />
                <div className="container text-center text-secondary">
                    <h1 className="display-6">Preguntas registradas</h1>
                </div>
                <hr className="container col-md-11"/>
                <br />
                <div className="container">
                <button className="btn btn-success" onClick={()=>{this.setState({form: null, modal: 'insert'}); this.modalInsert()}}> Agregar pregunta </button>
                </div>
                <br />
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th className="col-md-8">Pregunta</th>
                            <th>Encuesta</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(question => {
                            return(
                                <tr>
                                    <td>{question.IDENTIFICADOR}</td>
                                    <td>{question.PREGUNTA}</td>
                                    <td>{question.ENCUESTA}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => {this.selectquestion(question); this.modalInsert()}}><FontAwesomeIcon icon={faEdit}/></button>
                                        {"  "}
                                        <button className="btn btn-danger" onClick={() => {this.selectquestion(question); this.setState({modalDelete: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
                <Modal isOpen={this.state.modalInsert}>
                    <ModalHeader style = {{display: 'block'}}>
                        <span style = {{float: 'right'}}>Pregunta</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="IDENTIFICADOR">Identificador</label>
                            <input className="form-control" type="text" name="IDENTIFICADOR" id="IDENTIFICADOR" readOnly onChange={this.handleChange} value={form?form.IDENTIFICADOR:''}/>
                            <br />
                            <label htmlFor="PREGUNTA">Pregunta</label>
                            <input className="form-control" type="text" name="PREGUNTA" id="PREGUNTA" onChange={this.handleChange} value={form?form.PREGUNTA:''}/>
                            <br />
                            <label htmlFor="ENCUESTA">Encuesta</label>
                            <input className="form-control" type="text" name="ENCUESTA" id="ENCUESTA" onChange={this.handleChange} value={form?form.ENCUESTA:''}/>
                         </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.modal == 'insert'?
                        <button className="btn btn-success" onClick={()=>this.insertquestion()}>
                            Agregar
                        </button>:<button className="btn btn-primary" onClick={() => this.updatequestion()}>
                            Actualizar
                        </button>
                        }
                        <button className="btn btn-danger" onClick={()=>this.modalInsert()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalDelete}>
                    <ModalBody>
                        ¿Está seguro de eliminar la pregunta: {form && form.IDENTIFICADOR}?
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick = {() => this.deletequestion()}>Sí</button>
                        <button className="btn btn-secondary" onClick={() => this.setState({modalDelete: false})}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Question;