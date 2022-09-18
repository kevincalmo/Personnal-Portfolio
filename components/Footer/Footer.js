import React from 'react';
import PropTypes from 'prop-types';
import SocialMedia from '../Utils/SocialMedia';

const Footer = props => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <SocialMedia />
            <p>© {year}, All right reserved.</p>
        </footer>
    );
};

Footer.propTypes = {
    
};

export default Footer;