import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        return (
            <div className="sigma_cta style-14">
                <div className="sigma_cta-content d-block d-sm-flex align-items-center">
                    <i className="flaticon-message" />
                    <h4 className="mt-3 mt-sm-0">Suscribete para obtener noticias</h4>
                </div>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit will be Lorem ipsum dolor sit amet consectetur.</p>
                <form>
                    <div className="input-group has-border">
                        <input type="email" name="email" placeholder="Dirección de correo" required />
                        <div className="input-group-append">
                            <button type="button" className="light">
                                <i className="fal fa-envelope mr-2" />
                                Suscribirse
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Newsletter;