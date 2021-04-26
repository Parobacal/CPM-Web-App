import React, {Component} from 'react';
import '../css/login.css';

class Login extends Component{
    state = {
        form: {
            email: "",
            password: "" 
        }
    }

    loginSession = async e => {
        if (this.state.form.email === "admin" && this.state.form.password === "admin"){
            window.location.href="./home";
        } else {
            alert('El usuario ingresado o la contraseña son incorrectos');
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }
    render() { 
        return (
            <div>
                <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <div className="card card0 border-0">
                        <div className="row d-flex">
                            <div className="col-lg-6">
                                <div className="card1 pb-7">
                                    <div className="row"> <img src="https://i.imgur.com/Uoqb4j1.png" className="logo"/> </div>
                                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image"/> </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card2 card border-0 px-4 py-5">
                                    <div className="row mb-4 px-3">
                                        <h1 className="display-4 text-center mb-0 mr-4 mt-2">Comisión Mundial de Patentes.</h1>
                                    </div>
                                    <div className="row px-3 mb-4">
                                        <div className="line"></div> <small className="or text-center">Ingresar</small>
                                        <div className="line"></div>
                                    </div>
                                    <div className="row px-3"> <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Dirección de nt electrónico</h6>
                                        </label> <input className="mb-4" type="text" name="email" placeholder="Ingrese un correo válido" onChange={this.handleChange}/> </div>
                                    <div className="row px-3"> <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Contraseña</h6>
                                        </label> <input type="password" name="password" placeholder="Ingrese la contraseña" onChange={this.handleChange}/> </div>
                                    <div className="row px-3 mb-4">
                                    </div>
                                    <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={() => this.loginSession()}>Ingresar</button> </div>
                                    <div className="row mb-4 px-3"> <small className="font-weight-bold">¿Aún no tienes una cuenta? <a className="text-danger ">Regístrate</a></small> </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue py-4">
                            <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. Todos los derechos reservados.</small>
                                <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;