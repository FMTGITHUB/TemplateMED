import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import category from "../../data/category.json";

class Doctorsidebar extends Component {
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
                                <Link to={"/doctor/cat/" + item.id}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        {/* Data */}
                    </ul>
                </div>
                <div className="widget">
                    <h5 className="widget-title">Disponibilidad de citas</h5>
                    <input type="checkbox" name="free" id="availabilityDoctors" />
                    <label htmlFor="availabilityDoctors">Solo médicos gratis</label>
                    <input type="checkbox" name="unavailable" id="unavailableDoctors" />
                    <label className="mb-0" htmlFor="unavailableDoctors">Sólo médicos no disponibles</label>
                </div>
                <div className="widget">
                    <h5 className="widget-title">Género</h5>
                    <input type="radio" name="gendorDoctor" defaultValue="nopreference" id="genderDoctor" />
                    <label htmlFor="genderDoctor">Sin preferencias</label>
                    <input type="radio" name="gendorDoctor" defaultValue="femenino" id="genderDoctor1" />
                    <label htmlFor="genderDoctor1">Femenino</label>
                    <input type="radio" name="gendorDoctor" defaultValue="masculino" id="genderDoctor2" />
                    <label className="mb-0" htmlFor="genderDoctor2">Masculino</label>
                </div>
            </div>
        );
    }
}

export default withRouter(Doctorsidebar);