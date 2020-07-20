import React from 'react';

const ProfileModal = (props) => {
    return (
        <div className='ProfileModal'>
            <p onClick={props.close}>Close</p>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>
    )
}

export default ProfileModal;