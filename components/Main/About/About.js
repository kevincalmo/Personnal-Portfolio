import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Utils/Title';
import Image from 'next/image';
import picture from './1.png';
import Section from '../../Utils/Section';

const About = props => {

    const information = [
        ['First Name:', 'Joseph'],
        ['Last Name:', 'Bieber'],
        ['Age:', '27 years'],
        ['Nationality:', 'American'],
        ['Languages:', 'English, French'],
        ['Address:', '121 King Street, Melbourne, United States'],
        ['Freelance:', 'Available']
    ];
    return (
        <Section>
            <Title title="À Propos" />
            <div className="about">
                <div className="about__picture">
                    <Image src={picture} />
                </div>
                <div className="about__content">
                    <h4>Je suis Kévin CALMO</h4>
                    <ul>
                        {information.map((info, index) => (
                            <li key={index}>{info[0]} {info[1]}</li>
                        ))}
                    </ul>
                </div>
                <a href="#" download={true}>Télécharger mon cv</a>
            </div>
        </Section>
    );
};

About.propTypes = {

};

export default About;