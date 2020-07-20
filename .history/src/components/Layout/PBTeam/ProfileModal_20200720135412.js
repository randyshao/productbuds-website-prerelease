import React from 'react';

const ProfileModal = (props) => {
    return (
        <div className='ProfileModal'>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
            <button onClick={props.close}>Close</button>
        </div>
    )
}

export default ProfileModal;