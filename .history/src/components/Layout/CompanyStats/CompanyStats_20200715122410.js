import React from 'react';
import StatBox from './StatBox';

const CompanyStats = () => {
    return (
        <div className='CompanyStats'>
            <div className='CompanyStats MainContent'>
                <h2 className='MarginTop'>We launched on May 21st, 2020.</h2>
                <h2>Today we have</h2>
                <div className='StatSection'>
                    <StatBox number='1500+' platform='members in our Slack community' class='Bubble-1'/>
                    <StatBox number='2000+' platform='followers on LinkedIn' class='Bubble-1'/>
                    <StatBox number='500+' platform='unique event attendees' class='Bubble-1'/>
                </div>
            </div>
        </div>
        
    )
}

export default CompanyStats;