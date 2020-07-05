import React from 'react';
import Profile from './Profile';
import Grace from '../../../assets/images/team/grace.jpg'
import David from '../../../assets/images/team/david.jpg'
import Henrika from '../../../assets/images/team/henrika.jpg'
import Milap from '../../../assets/images/team/milap.jpg'
import Joseph from '../../../assets/images/team/joseph.jpg'
import Darsh from '../../../assets/images/team/darsh.jpg'

const PBTeam = () => {
    return (
        <div className='PBTeam'>
            <h1>Meet the Product Buds Team</h1>
            <Profile name='Grace Yeung' role='Co-founder' headshot={Grace} />
            <Profile name='David Zhou' role='Co-founder' headshot={David} />
            <Profile name='Henrika Lim' role='Co-founder' headshot={Henrika} />
            <Profile name='Milap Patel' role='Co-founder' headshot={Milap} />
            <Profile name='Joseph Shin' role='Director of Growth and Marketing' headshot={Joseph} />
            <Profile name='Darsh Thakkar' role='Director of Product Studies' headshot={Darsh} />
        </div>
    )
}

export default PBTeam;