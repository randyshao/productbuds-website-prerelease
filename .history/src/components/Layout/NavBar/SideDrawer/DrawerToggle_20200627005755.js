import React from 'react';
import '../../../../App.css'

const DrawerToggle = (props) => {
    return ( 
        <div onClick={props.clicked}>
            SIDEDRAWER TOGGLE
        </div> 
    )
}

export default DrawerToggle;