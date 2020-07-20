import React, {useState} from 'react';
import Linkedin from '../../../assets/linkedin.svg';
import ProfileModal from './ProfileModal';
import Auxiliary from '../../../hoc/Auxiliary'
import Modal from '../../UI/Modal';

const Profile = (props) => {

    const [showModal, setShowModal] = useState(false)

    const openModalHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }


    return (
        <Auxiliary>
            <Modal show={showModal} open={showModal} closed={closeModalHandler}>
                <ProfileModal name={props.name} bio={props.bio} close={closeModalHandler}/>
            </Modal>
            <div className='Profile'>
                <img className='Headshot' src={props.headshot}  onClick={openModalHandler} />
                <h2>{props.name}<span><a href={props.linkedin}><img className='Linkedin' src={Linkedin}/></a></span></h2>
                <h3>{props.role}</h3>
            </div>
        </Auxiliary>
        
    )
}

export default Profile;