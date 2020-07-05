import React from 'react';

const Profile = (props) => {
    return (
        <div>
            <img src={props.headshot} />
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
        </div>
    )
}

export default Profile;