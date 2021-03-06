import React from 'react';
import Linkedin from '../../../assets/linkedin.svg'

const Profile = (props) => {
    return (
        <div className='Profile'>
            <img src={props.headshot} />
            <h2>{props.name}</h2>
            <h3>{props.role}<span><img src={Linkedin}/></span></h3>
        </div>
    )
}

export default Profile;