import React from 'react';
import '../../../../App.css';
import Toggle from '../../../../assets/images/drawertoggle.svg';

const DrawerToggle = (props) => {
    return ( 
        <div className='DrawerToggle' onClick={props.clicked}>
            <img style={{paddingBottom: '5px'}} src={Toggle} />
        </div> 
    )
}

export default DrawerToggle;