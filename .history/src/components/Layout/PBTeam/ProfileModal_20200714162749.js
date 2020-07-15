import React from 'react';
import Profile from './Profile'

const ProfileModal = () => {
    return (
        <div className='ProfileModal'>
            <img src={props.headshot} />
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
        </div>
    )
}

export default ProfileModal;