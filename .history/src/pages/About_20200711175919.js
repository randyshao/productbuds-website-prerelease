import React from 'react';
import '../App.css';
import Auxiliary from '../hoc/Auxiliary';
import TextBanner from '../components/Layout/TitleBanner/TextBanner'
import PBTeam from '../components/Layout/PBTeam/PBTeam';
import ImageTextBox from '../components/Layout/ImageTextBox/ImageTextBox';


const About = () => {
    return (
        <Auxiliary>
            <TextBanner smallHeader='The Product Buds Mission'>To provide a space for the next generation of product managers to sprout, grow, and flourish their careers.</TextBanner>
            <ImageTextBox />
            <PBTeam />
        </Auxiliary>
    )
}

export default About;