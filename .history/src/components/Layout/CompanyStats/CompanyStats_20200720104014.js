import React from 'react';
import StatBox from './StatBox';

const CompanyStats = () => {
    const stats = [
        {number: '1600+', platform: 'members in our Slack community'},
        {number: '2700+', platform: 'followers on Linkedin'},
        {number: '800+', platform: 'event attendees'}
    ]

    return (
        <div className='CompanyStats'>
            <div className='CompanyStats MainContent'>
                <h2 className='MarginTop'>We launched on May 20th, 2020.</h2>
                <h2>Today we have</h2>
                <div className='StatSection'>
                    <StatBox number='1500+' platform='members in our Slack community'/>
                    <StatBox number='2000+' platform='followers on LinkedIn'/>
                    <StatBox number='500+' platform='unique event attendees'/>
                </div>
            </div>
        </div>
        
    )
}

export default CompanyStats;