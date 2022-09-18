import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../Utils/Section';
import Title from '../../Utils/Title';
import ContactCard from '../../Utils/ContactCard';
import ContactForm from '../../Utils/ContactForm';

const Contact = props => {

    const contact_information = [
        {
            picture: '',
            title: 'Téléphone',
            description: '+596 696 97 83 78'
        },
        {
            picture: '',
            title: 'E-mail',
            description: 'contact@kevin_calmo.com'
        }
    ];

    return (
        <Section>
            <Title title='Me contacter' />
            <div className="contact__intro">
                <div className="contact__intro_title">
                    <h4>Information de contact</h4>
                </div>
                <div className="contact__intro_content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. A omnis, iusto harum possimus non praesentium qui facere.
                    </p>
                </div>
            </div>
            <div className="contact__cards">
                {contact_information.map((info, index) => (
                    <ContactCard
                        key={index}
                        picture={info.picture}
                        title={info.title}
                        description={info.description}
                    />
                ))}
            </div>
            <ContactForm />
        </Section>
    );
};

Contact.propTypes = {

};

export default Contact;