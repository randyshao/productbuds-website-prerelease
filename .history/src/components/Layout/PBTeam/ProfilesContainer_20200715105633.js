import React from 'react';
import Profile from './Profile';
import ProfileModal from './ProfileModal';
import Linkedin from '../../../assets/linkedin.svg';
import Grace from '../../../assets/images/team/grace.jpg'
import David from '../../../assets/images/team/david.jpg'
import Henrika from '../../../assets/images/team/henrika.jpg'
import Milap from '../../../assets/images/team/milap.jpg'
import Joseph from '../../../assets/images/team/joseph.jpg'
import Darsh from '../../../assets/images/team/darsh.jpg'
import Randy from '../../../assets/images/team/randy.jpg'
import Sarah from '../../../assets/images/team/sarah.jpg'
import Phyllis from '../../../assets/images/team/phyllis.jpg'
import Ben from '../../../assets/images/team/ben.jpg'
import Linh from '../../../assets/images/team/linh.jpg'


const ProfilesContainer = () => {
    return (
        <div className='ProfilesContainer'>
            <Profile name='Grace Yeung' role='Co-founder' headshot={Grace} linkedin='https://www.linkedin.com/in/graceyg/'/>
            <Profile name='David Zhou' role='Co-founder' headshot={David} />
            <Profile name='Henrika Lim' role='Co-founder' headshot={Henrika} />
            <Profile name='Milap Patel' role='Co-founder' headshot={Milap} />
            <Profile name='Joseph Shin' role='Director of Growth and Marketing' headshot={Joseph} />
            <Profile name='Darsh Thakkar' role='Director of Product Studies' headshot={Darsh} />
            <Profile name='Randy Shao' role='Web Developer' headshot={Randy} />
            <Profile name='Sarah Ahmed' role='Web Developer' headshot={Sarah} />
            <Profile name='Phyllis Njoroge' role='Creative Director' headshot={Phyllis} />
            <Profile name='Benjamin Allan-Rahill' role='Designer' headshot={Ben} />
            <Profile name='Linh Tran' role='Editor' headshot={Linh} />
        </div>
    )
}

export default ProfilesContainer;