import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar.js/NavigationBar';
import Herobanner from './Herobanner/Herobanner';

const Header = props => {
    return (
        <header>
            <NavigationBar />
            <Herobanner />
            <div className="header__action">
                <a href="#">Défiler vers le bas</a>
            </div>
        </header>
    );
};

Header.propTypes = {
    
};

export default Header;