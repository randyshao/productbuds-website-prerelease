import React, { useState } from 'react';
import Profile from './Profile';
import Auxiliary from '../../../hoc/Auxiliary';
import Modal from '../../UI/Modal';
import ProfileModal from './ProfileModal';
import Linkedin from '../../../assets/linkedin.svg';
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

    const [showModal, setShowModal] = useState(false)

    const openModalHandler = () => {
        setShowModal(!showModal);
    }

    return (
        <Auxiliary>
            <Modal show={showModal}>
                <ProfileModal name='Grace Yeung' role='Co-founder' headshot={Grace} linkedin='https://www.linkedin.com/in/graceyg/' bio='David Zhou is a 4th year at the Georgia Institute of Technology majoring in Industrial Engineering with a concentration in 
                Analytics and Data Science. He is an aspiring Product/Program Manager with goals to "Engage, Empathize, Enable, and Empower 
                everyone" to drive positive change and unique growth wherever they are. He has worked as a Data Analyst at companies such 
                as Delta Air Lines and U.S. Xpress Ventures and is a current Project Manager Intern at General Atomics with a passion for 
                innovative thinking, strategic planning, and data-driven decision making. '/>
            </Modal>
            <div className='ProfilesContainer'>
                <Profile clicked={openModalHandler} name='Grace Yeung' role='Co-founder' headshot={Grace} linkedin='https://www.linkedin.com/in/graceyg/'/>
                <Profile name='David Zhou' role='Co-founder' headshot={David} linkedin='https://www.linkedin.com/in/daviddzhou/'/>
                <Profile name='Henrika Lim' role='Co-founder' headshot={Henrika} linkedin='https://www.linkedin.com/in/henrikalim/'/>
                <Profile name='Milap Patel' role='Co-founder' headshot={Milap} linkedin='https://www.linkedin.com/in/milappatel3/'/>
                <Profile name='Joseph Shin' role='Director of Growth and Marketing' headshot={Joseph} linkedin='https://www.linkedin.com/in/josephsjourney/'/>
                <Profile name='Darsh Thakkar' role='Director of Product Studies' headshot={Darsh} linkedin='https://www.linkedin.com/in/darshthakkar96/'/>
                <Profile name='Randy Shao' role='Web Developer' headshot={Randy} linkedin='https://www.linkedin.com/in/randyshao/'/>
                <Profile name='Sarah Ahmed' role='Web Developer' headshot={Sarah} linkedin='https://www.linkedin.com/in/sarahahmed31415/'/>
                <Profile name='Phyllis Njoroge' role='Creative Director' headshot={Phyllis} linkedin='https://www.linkedin.com/in/phyllis-njoroge/'/>
                <Profile name='Benjamin Allan-Rahill' role='Designer' headshot={Ben} linkedin='https://www.linkedin.com/in/bensblitz/'/>
                <Profile name='Linh Tran' role='Editor' headshot={Linh} linkedin='https://www.linkedin.com/in/linhtutran/'/>
            </div>
        </Auxiliary>
    )
}

export default ProfilesContainer;