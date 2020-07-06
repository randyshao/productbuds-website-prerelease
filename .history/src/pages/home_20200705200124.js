import React from 'react';
import '../App.css';
import Auxiliary from '../hoc/Auxiliary'
import TitleBanner from '../components/Layout/TitleBanner/TitleBanner';
import CompanyIntro from '../components/Layout/CompanyIntro/CompanyIntro';
import CompanyStats from '../components/Layout/CompanyStats/CompanyStats';
import CallToAction from '../components/Layout/CallToAction/CallToAction';
import Partners from '../components/Layout/Partners/Partners'

const Home = () => {
    return (
        <Auxiliary>
            <TitleBanner />
            <CompanyIntro />
            <CompanyStats />
            <Partners />
            <CallToAction />
        </Auxiliary>
    )
    
}

export default Home;