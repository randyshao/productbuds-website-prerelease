import React from 'react';
import Linkedin from '../../../assets/linkedin.svg';
import ProfileModal from './ProfileModal';
import Auxiliary from '../../../hoc/Auxiliary'

const Profile = (props) => {

    return (
        <Auxiliary>
            <Modal show={props.showModal}>
                <ProfileModal name={props.name} role={props.role} headshot={props.name} linkedin={props.linkedin} close={props.closeModalHandler}/>
            </Modal>
            <div className='Profile'>
                <img onClick={props.open} className='Headshot' src={props.headshot} />
                <h2>{props.name}<span><a href={props.linkedin}><img className='Linkedin' src={Linkedin}/></a></span></h2>
                <h3>{props.role}</h3>
            </div>
        </Auxiliary>
        
    )
}

export default Profile;