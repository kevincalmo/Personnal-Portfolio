import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ContactCard = props => {

    const contact_link = () => {
        switch (props.title) {
            case 'Téléphone':
                return <a href={"tel:"+props.description}>{props.description}</a>
                break;
            case 'E-mail':
                return <a href={"mailto:"+props.description}>{props.description}</a>
                break;
            default:
                return <p>{props.description}</p>
                break;
        }
    }
    return (
        <div className='contact__card'>
            <div className="contact__card_picture">
                <Image src={props.picture} />
            </div>
            <div className="contact__card_content">
                <div className="contact__card_content_title">
                    <h4>{props.title}</h4>
                </div>
                <div className="contact__card_content_description">
                    {contact_link()}
                </div>
            </div>
        </div>
    );
};

ContactCard.propTypes = {
    
};

export default ContactCard;