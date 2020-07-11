import React from 'react';
import '../App.css';
import Auxiliary from '../hoc/Auxiliary';
import AboutBanner from '../components/Layout/TitleBanner/AboutBanner'
import PBTeam from '../components/Layout/PBTeam/PBTeam';


const About = () => {
    return (
        <Auxiliary>
            <div className='MainContent'>
                <AboutBanner />
                <PBTeam />
            </div>
        </Auxiliary>
    )
}

export default About;