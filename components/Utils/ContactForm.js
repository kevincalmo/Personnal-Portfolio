import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const ContactForm = props => {

    const inputs=[
        {
            input: 'input',
            type: 'text',
            placeholder: 'Entrer votre prénom'
        },
        {
            input: 'input',
            type: 'text',
            placeholder: 'Entrer votre e-mail'
        },
        {
            input: 'input',
            type: 'text',
            placeholder: 'Entrer votre sujet'
        },
        {
            input: 'text-area',
            type: 'text-area',
            placeholder: 'Entrer votre méssage'
        },
    ];

    return (
        <div className='contact__form'>
            {inputs.map((input, index) => (
                <Input
                    key={index}
                    input={input.input}
                    type={input.type}
                    placeholder={input.placeholder}
                />
            ))}
            <button>Envoyer mon message</button>
        </div>
    );
};

ContactForm.propTypes = {

};

export default ContactForm;