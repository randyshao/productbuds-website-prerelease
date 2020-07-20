import React from 'react';
import Linkedin from '../../../assets/linkedin.svg'

const Profile = (props) => {

    return (
        <div className='Profile'>
            <img onClick={props.open} className='Headshot' src={props.headshot} />
            <h2>{props.name}<span><a href={props.linkedin}><img className='Linkedin' src={Linkedin}/></a></span></h2>
            <h3>{props.role}</h3>
        </div>
    )
}

export default Profile;