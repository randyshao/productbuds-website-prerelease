import React from 'react';
import StatBox from './StatBox';

const CompanyStats = () => {
    return (
        <div>
            <h2>Since our launch on May 20th, 2020,</h2>
            <h2>we now have:</h2>
            <StatBox number='1300+' platform='members on slack'/>
            <StatBox number='2000+' platform='members on linkedin'/>
            <StatBox number='500+' platform='unique event attendees'/>
        </div>
    )
}

export default CompanyStats;