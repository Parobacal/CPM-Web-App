import React, {Component} from 'react';
import '../css/home.css';
import Navigation from '../components/navbar';

class Home extends Component{

    render() { 
        return (
            <div>
                <Navigation />
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="page-caption">
                                    <h1 class="page-title">Comisión Mundial de las Patentes</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-section">
                    <div class="container">
                        <div class="card-block bg-white mb30">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  
                                    <div class="section-title mb-0">
                                        <h2>Patentízate. Este es el lugar indicado</h2>
                                        <p>Visualiza todos los registros de patentes y encuestas a lo largo del tiempo. </p>
                                    </div>
                             
                                </div>
                            </div>
                        </div>
                        <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                        Creado para <a href="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" target="_blank">la humanidad</a>
                        </div></div>
                        </div>
                        </div>
                        </div>
        );
    }
}

export default Home;