import React from 'react';
import StatBox from './StatBox';

const CompanyStats = () => {
    return (
        <div>
            <h2>We Launched on May 21st, 2020.</h2>
            <h2>Today we have:</h2>
            <StatBox number='1300+' platform='members on slack'/>
            <StatBox number='2000+' platform='members on linkedin'/>
            <StatBox number='1300+' platform='members on slack'/>
        </div>
    )
}

export default CompanyStats;