import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../Utils/Section';
import Title from '../../Utils/Title';
import WorkView from '../../Utils/WorkView';
import image from '../../../public/bg_08.jpg'

const Work = props => {

    const tags = [
        'All',
        'HTML',
        'CSS',
        'PHP',
        'SYMFONY',
        'REACT',
        'WORDPRESS'
    ]

    const works_test = [
        {
            picture: image,
            title: 'lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tag: ['vue', 'react', 'syymfony']
        },
        {
            picture: image,
            title: 'lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tag: ['vue', 'react', 'syymfony']
        },
        {
            picture: image,
            title: 'lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tag: ['vue', 'react', 'syymfony']
        },
        {
            picture: image,
            title: 'lorem',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tag: ['vue', 'react', 'syymfony']
        },
    ]
    return (
        <Section>
            <Title title={'Mes réalisations'} />
            <div className="work__search">
                {tags.map((tag, index) => (
                    <button key={index}>{tag}</button>
                ))}
            </div>
            <div className="work__views">
                {works_test.map((work_view, index) => (
                    <WorkView
                        key={index}
                        picture={work_view.picture}
                        title={work_view.title}
                        description={work_view.description}
                    />
                ))}
            </div>
            <button>Voir plus</button>
        </Section>
    );
};

Work.propTypes = {

};

export default Work;