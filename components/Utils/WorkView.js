import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const WorkView = props => {
    return (
        <div className='work__view'>
            <Image src={props.picture} />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
};

WorkView.propTypes = {
    
};

export default WorkView;