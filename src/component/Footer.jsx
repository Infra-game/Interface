import React from 'react';

/**
 * it is a footer with the site's information
 * @returns {HTMLElement}
 */
const Footer = () => {
    return (
        <div className="footer">
            <div>
                <a href="">Politique de confidentialité</a>&nbsp;
                <a href="">Conditions d'utilisations</a>
            </div>
            <p>@ 2021 Copyright @ LobbyOne</p>
        </div>
    );
};

export default Footer;