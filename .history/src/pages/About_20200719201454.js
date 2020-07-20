import React from 'react';
import '../App.css';
import Auxiliary from '../hoc/Auxiliary';
import TextBanner from '../components/Layout/TitleBanner/TextBanner'
import PBTeam from '../components/Layout/PBTeam/PBTeam';
import ImageTextBox from '../components/Layout/ImageTextBox/ImageTextBox';
import Modal from '../components/UI/Modal';


const About = () => {
    return (
        <Auxiliary>
            <TextBanner smallHeader='The Product Buds Mission'>Build an inclusive community where budding product managers sprout, grow, and flourish.</TextBanner>
            <ImageTextBox />
            <PBTeam />
        </Auxiliary>
    )
}

export default About;