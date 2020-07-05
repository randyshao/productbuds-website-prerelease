import React from 'react';
import '../App.css';
import Auxiliary from '../hoc/Auxiliary';
import AboutBanner from '../components/Layout/TitleBanner/AboutBanner'
import PBTeam from '../components/Layout/PBTeam/PBTeam';


const About = () => {
    return (
        <Auxiliary>
            <AboutBanner />
            <PBTeam />
        </Auxiliary>
    )
}

export default About;