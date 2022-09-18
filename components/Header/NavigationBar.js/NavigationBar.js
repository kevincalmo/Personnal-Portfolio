import React, { useState } from 'react';
import PropTypes from 'prop-types';
import mobile_menu from './menu_mobile.png'
import close_mobile_menu from './close_menu_mobile.png'
import Image from 'next/image';

const NavigationBar = props => {

    const [menuActived, setMenuActived] = useState(false);

    const activeMenuHandler = () => {
        /* Je récupère l'inverse, comme un toggle */
        setMenuActived(!menuActived);
    }
    return (
        <div className='header__navigation-bar'>
            <div className="header__navigation-bar_logo">
                <a href="/">Kevin CALMO</a>
            </div>
            <nav className={menuActived ?
                'header__navigation-bar_links actived' :
                'header__navigation-bar_links'}>
                <li className='header__navigation-bar_link'><a href="#">Accueil</a></li>
                <li className='header__navigation-bar_link'><a href="#">À propos</a></li>
                <li className='header__navigation-bar_link'><a href="#">Mes services</a></li>
                <li className='header__navigation-bar_link'><a href="#">Mes réalisations</a></li>
                <li className='header__navigation-bar_link'><a href="#">Contact</a></li>
            </nav>
            <div onClick={activeMenuHandler} className="header__navigation-bar_mobile">
                <Image onclick src={menuActived ? close_mobile_menu : mobile_menu} />
            </div>
        </div>
    );
};

NavigationBar.propTypes = {

};

export default NavigationBar;