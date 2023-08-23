import React, { Component } from 'react';

class Contacticons extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon bg-primary-1 text-white">
                                        <i className="flaticon-hospital" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5>Nuestra direccion</h5>
                                    <p>PSD Building, 2 Tower St, United States.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon bg-primary-1 text-white">
                                        <i className="flaticon-call" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5>Nuestro Telefono</h5>
                                    <p>Telefono: 0029129102320</p>
                                    <p>Celular: 000 2324 39493</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon bg-primary-1 text-white">
                                        <i className="flaticon-envelope" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5>Nuestro Email</h5>
                                    <p>Email: example@example.com</p>
                                    <p>Consultas: example@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacticons;