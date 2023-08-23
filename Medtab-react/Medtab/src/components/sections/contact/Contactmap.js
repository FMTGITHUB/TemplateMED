import React, { Component } from 'react';

class Contactmap extends Component {
    render() {
        return (
            <div className="sigma_contact-map">
                <iframe title="contactmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8653088944693!2d-58.36537928977067!3d-34.632843882771624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3358af9483efd%3A0x50aba6f2444dc98!2sClub%20Atl%C3%A9tico%20Boca%20Juniors%20Hockey!5e0!3m2!1ses-419!2sar!4v1692663514312!5m2!1ses-419!2sar"  height={600} allowFullScreen>
                </iframe>
            </div>
        );
    }
}

export default Contactmap;