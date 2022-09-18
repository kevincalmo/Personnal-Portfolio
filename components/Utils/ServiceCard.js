import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ServiceCard = props => {
    return (
        <div className='service__card'>
            <div className="service__card_head">
                <div className="service__card_head_picture">
                    <Image src={props.picture} />
                </div>
                <div className="service__card_head_number">
                    {props.number}
                </div>
            </div>
            <div className="service__card_content">
                <div className="service__card_content_title">
                    {props.title}
                </div>
                <div className="service__card_content_description">
                    {props.description}
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {

};

export default ServiceCard;