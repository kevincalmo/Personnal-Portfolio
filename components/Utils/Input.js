import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {

    const displayInput = () => {
        switch (props.input) {
            case 'input':
                return <input placeholder={props.placeholder} type={props.type} />
                break;
            case 'text-area':
                return <textarea placeholder={props.placeholder} type={props.type} />
                break;

            default:
                break;
        }
    }

    return (
        <>
            {displayInput()}
        </>
    );
};

Input.propTypes = {

};

export default Input;