import React from 'react';
import Profile from './Profile';
import Grace from '../../../assets/images/team/grace.jpg'
import David from '../../../assets/images/team/david.jpg'
import Henrika from '../../../assets/images/team/henrika.jpg'
import Milap from '../../../assets/images/team/milap.jpg'
import Joseph from '../../../assets/images/team/joseph.jpg'

const PBTeam = () => {
    return (
        <div>
            <Profile name='Grace Yeung' role='Co-founder' headshot={Grace} />
            <Profile name='David' role='Co-founder' headshot={David} />
            <Profile name='Grace Yeung' role='Co-founder' headshot={henrika} />
            <Profile name='Grace Yeung' role='Co-founder' headshot={milap} />
            <Profile name='Grace Yeung' role='VP of Growth' headshot={joseph} />
        </div>
    )
}

export default PBTeam;