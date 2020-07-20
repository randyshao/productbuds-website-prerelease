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
        { name: 'Henrika Lim', role: 'Co-founder', headshot: Henrika, linkedin: 'https://www.linkedin.com/in/henrikalim/', bio: 'Milap Patel is a junior at the University of California, Davis majoring in Managerial Economics and double minoring in Computer Science and Technology Management. He is an aspiring Product/Project Manager with goals to create products in industries that can really drive change in the world. He has worked as a Product Manager with startups such as Amelia and Niiti and is currently looking to expand his knowledge in data science, design and strategic marketing. When not working on products, you can find Milap playing sports, working out, volunteering or creating home decor.' },
        { name: 'Milap Patel', role: 'Co-founder', headshot: Milap, linkedin: 'https://www.linkedin.com/in/milappatel3/', bio: 'Henrika Lim is a recent Bachelor of Commerce graduate at the University of Victoria who majored in Entrepreneurship. Her personal mission is to pursue impact-driven tech initiatives that create opportunities for the disadvantaged, believing that everyone deserves a fighting chance of succeeding regardless of the privileges they are born with. She is an aspiring social entrepreneur and an incoming Product Manager at Poly. She has previously interned as Associate Product Manager at Workday for a year where she was formally introduced to the field of product management.' },
        { name: 'Joseph Shin', role: 'Director of Growth and Marketing', headshot: Joseph, linkedin: 'https://www.linkedin.com/in/josephsjourney/', bio: 'Joseph Shin is a senior at Emory University\'s Goizueta Business School pursuing a BBA in Marketing and Information Systems & Operations Management. As an aspiring Product Manager, he is fascinated by how tech products impact the world and its customers. He currently works at a small tech startup as a PM intern, expects to release his podcast in the coming month, and has plans to write a book over the summer/fall. During his free time, you can find Joseph playing the guitar and singing, creating content on LinkedIn, or watching basketball.' },
        { name: 'Darsh Thakkar', role: 'Director of Product Studies', headshot: Darsh, linkedin: 'https://www.linkedin.com/in/darshthakkar96/', bio: 'Darsh Thakkar graduated from the Georgia Tech Masters in Human Computer Interaction program in May 2020 and majored in Computer Science in his undergrad. He previously interned at UPS in its advanced technology group as a Product Manager Intern and is an incoming Associate Product Manager at UPS on emerging tech and data oriented products. Darsh aspires to focus on product development with a user driven aspect which makes a users life easier by focusing on delightful user experience, in the long run using technology to create global impact. Fun fact: he is a big soccer fan!' },
        { name: 'Randy Shao', role: 'Web Developer', headshot: Randy, linkedin: 'https://www.linkedin.com/in/randyshao/', bio: 'Randy Shao is a third year at Queen\'s University studying Computer Science. As an aspiring Product Manager, he is fascinated on how to build tech products with a more user-driven mindset in order to better understand and empathize with the user on how he can make their lives easier through technology. Currently, he is working at a small tech startup as a technology and marketing intern. Outside of tech, he is really passionate about photography, videography and travelling.' },
        { name: 'Sarah Ahmed', role: 'Web Developer', headshot: Sarah, linkedin: 'https://www.linkedin.com/in/sarahahmed31415/', bio: 'Sarah Ahmed is a rising Senior at Santa Clara University majoring in Web Design and Engineering. She is awed by the potential of emerging tech and hopes to become a Product Manager who leads with empathy, compassion, and Human-Centered Design. Ethical and human-friendly products are always her main priority. In addition to her role at Product Buds, Sarah is an intern at Moogsoft and a multi-skilled UX Designer at a student-run startup. In her free time she enjoys laughing, singing, and scouring YouTube for digital art tutorials.' },
        { name: 'Phyllis Njoroge', role: 'Creative Director', headshot: Phyllis, linkedin: 'https://www.linkedin.com/in/phyllis-njoroge/', bio: 'Phyllis Njoroge graduated from Tufts University where she majored in Cognitive and Brain Sciences while doing graphic design, UI/UX design, and user research. She is currently a software engineering student at the Flatiron School where she is learning full-stack web development. She is passionate about lifelong learning, driving innovation, and breaking down barriers so people are no longer limited by their circumstances. As an aspiring PM, she wants to focus on groundbreaking products at a company that values meaningful inclusion and empowerment of visible and invisible diversity. During her free time, you can find Phyllis scrolling through LinkedIn, attending webinars, writing Medium posts, laughing at her own jokes, making art, or dancing in her room.' },
        { name: 'Benjamin Allan-Rahill', role: 'Designer', headshot: Ben, linkedin: 'https://www.linkedin.com/in/bensblitz/', bio: 'Benjamin Allan-Rahill is a rising third year at Middlebury College. He is studying Computer Science and Economics but is passionate about design, math, and biology. Ben is the National Junior Representative for the peace education organization CISV and is most interested in building impactful technology. He is interested in pretty much anything and is always trying to learn something new! In his free time, he likes to ski, rock climb, bike, and cook crepes.' },
        { name: 'Linh Tran', role: 'Editor', headshot: Linh, linkedin: 'https://www.linkedin.com/in/linhtutran/', bio: 'Linh T. Tran is a junior at the University of Louisiana at Lafayette majoring in Strategic Communication but has branched interest in Product Management and Product Marketing Management. She finds fascination in all things art, people, and psychology (hence her interest in marketing). If you’re looking for her, you’ll find her sharing her artwork online, creating content on Linkedin, or rushing to send out her personal newsletter, Linhsights.' }
    ];

    const [showModal, setShowModal] = useState(false)

    const openModalHandler = () => {
        setShowModal(!showModal);
    }

    return (
        <Auxiliary>
            <Modal show={showModal}>
                <ProfileModal name='Grace Yeung' role='Co-founder' headshot={Grace} linkedin='https://www.linkedin.com/in/graceyg/' />
            </Modal>
            <div className='ProfilesContainer'>
                {teamMember.map(detail => (
                    <Profile 
                        key={detail.linkedin}
                        name={detail.name}
                        role={detail.role}
                        headshot={detail.headshot}
                        linkedin={detail.linkedin}
                        clicked={showModal}
                    />
                ))}
            </div>
        </Auxiliary>
    )
}

export default ProfilesContainer;