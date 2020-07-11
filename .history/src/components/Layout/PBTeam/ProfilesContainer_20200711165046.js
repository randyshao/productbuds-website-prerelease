import React from 'react';
import Profile from './Profile';
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
            <Profile name='Grace Yeung' role='Co-founder' headshot={Grace} />
            <Profile name='David Zhou' role='Co-founder' headshot={David} />
 
        </div>
    )
}

export default ProfilesContainer;