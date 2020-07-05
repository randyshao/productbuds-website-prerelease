import React from 'react';
import '../App.css';
import Auxiliary from '../hoc/Auxiliary'
import TitleBanner from '../components/Layout/TitleBanner/TitleBanner';
import CompanyIntro from '../components/Layout/CompanyIntro/CompanyIntro';
import CompanyStats from '../components/Layout/CompanyStats/CompanyStats';
import CallToAction from '../components/Layout/CallToAction/CallToAction';

const Home = () => {
    return (
        <Auxiliary>
            <TitleBanner />
            <CompanyIntro />
            <CompanyStats />
            <CallToAction />
        </Auxiliary>
    )
    
}

export default Home;