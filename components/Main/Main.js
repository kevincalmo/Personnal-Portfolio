import React from 'react';
import PropTypes from 'prop-types';
import About from './About/About';
import Service from './Service/Service';
import Work from './Work/Work';
import Contact from './Contact/Contact';

const Main = props => {
    return (
        <main>
            <About />
            <Service />
            <Work />
            <Contact />
        </main>
    );
};

Main.propTypes = {
    
};

export default Main;