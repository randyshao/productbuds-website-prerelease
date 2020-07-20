import React, { useState } from 'react';
import Profile from './Profile';
import Auxiliary from '../../../hoc/Auxiliary';
import Modal from '../../UI/Modal';
import ProfileModal from './ProfileModal';
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

    
    const teamMember = [
        { name: 'Grace Yeung', role: 'Co-founder', headshot: Grace, linkedin: 'https://www.linkedin.com/in/graceyg/', bio: 'Grace Yeung is a senior at Northeastern University majoring in Business Marketing and minoring in Computer Science. She is an aspiring Product Manager who is passionate about connecting aspiring PMs with opportunities to learn and grow, providing mentorship to college students, and diversifying the tech talent landscape. As a previous Product Manager Co-Op at GE Lighting, current Product Manager Intern at Salesforce, and incoming Business Analyst Co-Op at Bluewolf, an IBM Company, she loves building and shipping great products with multi-talented teams.' },
        { name: 'David Zhou', role: 'Co-founder', headshot: David, linkedin: 'https://www.linkedin.com/in/daviddzhou/', bio: 'David Zhou is a 4th year at the Georgia Institute of Technology majoring in Industrial Engineering with a concentration in Analytics and Data Science. He is an aspiring Product/Program Manager with goals to "Engage, Empathize, Enable, and Empower everyone" to drive positive change and unique growth wherever they are. He has worked as a Data Analyst at companies such as Delta Air Lines and U.S. Xpress Ventures and is a current Project Manager Intern at General Atomics with a passion for innovative thinking, strategic planning, and data-driven decision making.' },
        
    ];

    const [showModal, setShowModal] = useState(false)

    const openModalHandler = () => {
        setShowModal(!showModal);
    }

    return (
        <Auxiliary>
            {/* <Modal show={showModal}>
                <ProfileModal name='Grace Yeung' role='Co-founder' headshot={Grace} linkedin='https://www.linkedin.com/in/graceyg/' />
            </Modal> */}
            <div className='ProfilesContainer'>
            {/* {{array.map(image => {
                    return <img key={image} src={require(`../../../assets/images/team/${image}.jpg`)} />
                })};} */}
                {teamMember.map(detail => (
                    <Profile 
                        key={detail.linkedin}
                        name={detail.name}
                        role={detail.role}
                        headshot={detail.headshot}
                        linkedin={detail.linkedin}
                    />
                ))}
            </div>
        </Auxiliary>
    )
}

export default ProfilesContainer;