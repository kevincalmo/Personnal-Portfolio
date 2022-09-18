import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../Utils/Section';
import Title from '../../Utils/Title';
import ServiceCard from '../../Utils/ServiceCard';

const Service = props => {
    const services = [
        {
            picture: '',
            title: 'lorem ipsum dolor',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis molestie ex, vitae ultrices libero. Duis tincidunt diam urna, elementum fermentum tortor scelerisque id. Mauris non dapibus velit. '
        },
        {
            picture: '',
            title: 'lorem ipsum dolor',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis molestie ex, vitae ultrices libero. Duis tincidunt diam urna, elementum fermentum tortor scelerisque id. Mauris non dapibus velit. '
        },
        {
            picture: '',
            title: 'lorem ipsum dolor',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis molestie ex, vitae ultrices libero. Duis tincidunt diam urna, elementum fermentum tortor scelerisque id. Mauris non dapibus velit. '
        },
    ];

    return (
        <Section>
            <Title title={'Mes services'} />
            {services.map((service,index)=>(
                <ServiceCard 
                key={index}
                picture={service.picture}
                number={index+1}  
                title={service.title}
                description={service.description}
                />
            ))}
        </Section>
    );
};

Service.propTypes = {

};

export default Service;