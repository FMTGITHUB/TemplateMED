import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../data/service/service.json";

class Footer extends Component {
    render() {
        return (
            <footer className="sigma_footer style-5 pb-0">
                <div className="container">
                    <div className="sigma_info-wrapper style-26 mb-5">
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-map-marker-alt" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>Tu casa</p>
                                <p className="secondary-color"><b>Drive Buenos Aires, IL 60607</b>
                                </p>
                            </div>
                        </div>
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-phone" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>Llámanos</p>
                                <p className="secondary-color"><b>360-779-2228</b>
                                </p>
                            </div>
                        </div>
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-envelope" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>Nuestro mail</p>
                                <p className="secondary-color"><b>example@example.com</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sigma_footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="sigma_footer-widget">
                                    <div className="sigma_footer-logo mb-4">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="logo" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                        </div>
                                    </div>
                                    <ul className="sigma_social-icons has-border mt-4 justify-content-start">
                                        <li>
                                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-twitter" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-instagram" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-linkedin" /></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-google" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Servicios</h5>
                                    <ul className="sigma_footer-links">
                                        {/* Data */}
                                        {serviceblock.slice(0, 5).map((item, i) => (
                                            <li key={i}>
                                                <Link to={"/service-details/" + item.id}>{item.title}</Link>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-3">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Links útiles</h5>
                                    <ul className="sigma_footer-links">
                                        <li>
                                            <Link to="/">Inicio</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Sobre nosotros</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Noticias</Link>
                                        </li>
                                        <li>
                                            <Link to="/doctor-grid">Doctores</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contáctenos</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Suscribirse</h5>
                                    <form>
                                        <input type="email" name="email" placeholder="Email" required />
                                        <button type="button" className="mt-3 btn-block">Suscribirse</button>
                                        <p className="mb-0 mt-3">Obtené las últimas actualizaciones via mail. Podés desuscribirte en cualquier momento</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between">
                        <div className="sigma_footer-copyright mt-0 mb-3 mb-sm-0">
                            <p className="mb-0">© Website <Link to="#">2022</Link> | All Rights Reserved
                            </p>
                        </div>
                        <ul className="sigma_footer-links">
                            <li>
                                <Link to="#">Privacidad</Link>
                            </li>
                            <li>
                                <Link to="#">Términos</Link>
                            </li>
                            <li>
                                <Link to="#">Mapa del sitio</Link>
                            </li>
                            <li>
                                <Link to="#">Ayuda</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;