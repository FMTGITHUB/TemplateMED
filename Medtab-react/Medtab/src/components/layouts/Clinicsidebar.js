import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import category from "../../data/category.json";

class Clinicsidebar extends Component {
    render() {
        return (
            <div className="sidebar mb-5">
                {/* Category Widget */}
                <div className="widget widget-categories">
                    <h5 className="widget-title">Especialidad</h5>
                    <ul>
                        {/* Data */}
                        {category.map((item, i) => (
                            <li key={i}>
                                <Link to={"/clinic/cat/" + item.id}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        {/* Data */}
                    </ul>
                </div>
                <div className="widget p-0 border-0">
                    <div className="sigma_contact-map">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9107411794375!2d-58.36666522348888!3d-34.63169585897757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3358af9483efd%3A0x50aba6f2444dc98!2sClub%20Atl%C3%A9tico%20Boca%20Juniors%20Hockey!5e0!3m2!1ses-419!2sar!4v1692762625093!5m2!1ses-419!2sar" height={300} allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Clinicsidebar);