import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import picture from './1.png';
import SocialMedia from '../../Utils/SocialMedia';

const Herobanner = props => {
    return (
        <div className='header__herobanner'>
            <div className="header__herobanner_picture">
                <Image src={picture} width="200" height={'200'} />
            </div>
            <div className="header__herobanner_content">
                <h1>Bienvenue à toi <br /><b>Je suis Kévin</b></h1>
                <h2>I am a frontend web developer. I can provide
                    clean code and pixel perfect design. I also
                    make website more & more interactive with
                    web animations.</h2>
            </div>
            <SocialMedia />
        </div>
    );
};

Herobanner.propTypes = {

};

export default Herobanner;