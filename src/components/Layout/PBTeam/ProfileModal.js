import React from 'react';

const ProfileModal = (props) => {
    return (
        <div className='ProfileModal'>
            <img src={props.headshot} />
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
            <p>David Zhou is a 4th year at the Georgia Institute of Technology majoring in Industrial Engineering with a concentration in 
                Analytics and Data Science. He is an aspiring Product/Program Manager with goals to "Engage, Empathize, Enable, and Empower 
                everyone" to drive positive change and unique growth wherever they are. He has worked as a Data Analyst at companies such 
                as Delta Air Lines and U.S. Xpress Ventures and is a current Project Manager Intern at General Atomics with a passion for 
                innovative thinking, strategic planning, and data-driven decision making. 
            </p>
        </div>
    )
}

export default ProfileModal;