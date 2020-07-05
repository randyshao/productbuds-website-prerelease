import React from 'react';
import './App.css';
import Auxiliary from '../hoc/Auxiliary'
import TitleBanner from '../components/Layout/TitleBanner/TitleBanner';
import CompanyIntro from '../components/Layout/CompanyIntro/CompanyIntro';
import CompanyStats from '../components/Layout/CompanyStats/CompanyStats'


const About = () => {
    <Auxiliary>
        <TitleBanner />
        <CompanyIntro />
        <CompanyStats />
    </Auxiliary>
}

export default About;