import React from 'react';
import Profile from './Profile';
import Grace from '../../../assets/images/team/grace.jpg'

const PBTeam = () => {
    return (
        <div>
            <Profile name='Grace Yeung' role='Co-founder' headshot={Grace} />
            <Profile name='David' role='Co-founder' headshot={David} />
            <Profile name='Grace Yeung' role='Co-founder' headshot={Grace} />
            <Profile name='Grace Yeung' role='Co-founder' headshot={Grace} />
            <Profile name='Grace Yeung' role='Co-founder' headshot={Grace} />
            <Profile name='Grace Yeung' role='Co-founder' headshot={Grace} />
        </div>
    )
}

export default PBTeam;