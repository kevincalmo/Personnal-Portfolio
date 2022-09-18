import React from 'react';
import PropTypes from 'prop-types';
import insta from './insta.png';
import Image from 'next/image';

const SocialMedia = props => {
    return (
        <div className="header__herobanner_socials">
            <div className="header__herobanner_social">
                <Image width={42} height={42} src={insta} />
            </div>
            <div className="header__herobanner_social">
                <Image width={42} height={42} src={insta} />
            </div>
            <div className="header__herobanner_social">
                <Image width={42} height={42} src={insta} />
            </div>
            <div className="header__herobanner_social">
                <Image width={42} height={42} src={insta} />
            </div>
            <div className="header__herobanner_social">
                <Image width={42} height={42} src={insta} />
            </div>

        </div>
    );
};

SocialMedia.propTypes = {

};

export default SocialMedia;