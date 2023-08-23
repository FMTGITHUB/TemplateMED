import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <section className="section errorpage">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 text-center">
                            <img src={process.env.PUBLIC_URL + "/assets/img/home-2/635x450.jpg"} alt="img" />
                        </div>
                        <div className="col-lg-5 text-center">
                            <div className="error-texts relative">
                                <h1>404</h1>
                                <h3>¡Uy! ¡Esa página no existe!</h3>
                                <p>Es posible que este archivo se haya movido o eliminado. Asegúrese de revisar su ortografía.</p>
                                <Link to="/" className="sigma_btn">Regrasar al inicio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;