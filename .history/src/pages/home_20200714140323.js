import React from 'react';
import '../App.css';
import Auxiliary from '../hoc/Auxiliary'
import TitleBanner from '../components/Layout/TitleBanner/TitleBanner';
import CompanyIntro from '../components/Layout/CompanyIntro/CompanyIntro';
import CompanyStats from '../components/Layout/CompanyStats/CompanyStats';
import CallToAction from '../components/Layout/CallToAction/CallToAction';
import Testimonials from '../components/Layout/Testimonials/Testimonials';
import Partners from '../components/Layout/Partners/Partners'

const Home = () => {
    return (
        <Auxiliary>
            <TitleBanner />
            <div className='MainContent'>
                <CompanyIntro />
                <CompanyStats />
                <Partners />
            </div>
        </Auxiliary>
    )
    
}

export default Home;