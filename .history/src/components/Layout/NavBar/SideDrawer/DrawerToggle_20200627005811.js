import React from 'react';
import '../../../../App.css'

const DrawerToggle = (props) => {
    return ( 
        <div onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div> 
    )
}

export default DrawerToggle;