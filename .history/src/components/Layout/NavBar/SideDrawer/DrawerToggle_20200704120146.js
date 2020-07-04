import React from 'react';
import '../../../../App.css'

const DrawerToggle = (props) => {
    return ( 
        <div className='DrawerToggle' onClick={props.clicked}>
            <div></div>
        </div> 
    )
}

export default DrawerToggle;