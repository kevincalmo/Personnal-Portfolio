import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
    return (
        <div className='title'>
            <h3>{props.title}</h3>
        </div>
    );
};

Title.propTypes = {
    
};

export default Title;