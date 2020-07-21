import React from 'react';
import '../App.css';
import Auxiliary from '../hoc/Auxiliary'
import TitleBanner from '../components/Layout/TitleBanner/TitleBanner';
import CompanyIntro from '../components/Layout/CompanyIntro/CompanyIntro';
import CompanyStats from '../components/Layout/CompanyStats/CompanyStats';
import Testimonials from '../components/Layout/TestimonialsSlider/TestimonialsSlider';
import Partners from '../components/Layout/Partners/Partners'

const Home = () => {
    return (
        <Auxiliary>
            <TitleBanner />
            <CompanyIntro />
            <CompanyStats />
            <Testimonials />
            <Partners />
        </Auxiliary>
    )
    
}

export default Home;