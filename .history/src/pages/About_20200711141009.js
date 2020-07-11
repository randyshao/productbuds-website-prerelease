import React from 'react';
import '../App.css';
import Auxiliary from '../hoc/Auxiliary';
import TextBanner from '../components/Layout/TitleBanner/TextBanner'
import PBTeam from '../components/Layout/PBTeam/PBTeam';


const About = () => {
    return (
        <Auxiliary>
            <div className='MainContent'>
                <TextBanner />
                <PBTeam />
            </div>
        </Auxiliary>
    )
}

export default About;