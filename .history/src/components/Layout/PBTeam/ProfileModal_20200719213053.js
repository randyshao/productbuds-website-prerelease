import React from 'react';

const ProfileModal = (props) => {
    return (
        <div className='ProfileModal'>
            <Backdrop show={props.open} clicked={props.closed}
            <img src={props.headshot} />
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
            <p>{props.bio}</p>
        </div>
    )
}

export default ProfileModal;