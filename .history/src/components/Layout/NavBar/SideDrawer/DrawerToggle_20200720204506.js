import React from 'react';
import '../../../../App.css';
import Toggle from '../../../../assets/images/drawertoggle.svg'

const DrawerToggle = (props) => {
    return ( 
        <div className='DrawerToggle' onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div> 
    )
}

export default DrawerToggle;