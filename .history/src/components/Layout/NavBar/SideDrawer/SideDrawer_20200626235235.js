import React from 'react';
import Logo from '../../../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import '../../../../App.css';

const SideDrawer = (props) => {

    const attachedClasses = ['SideDrawer', 'Closed']

    return (
        <div className='SideDrawer'>
            <Logo height='11%' show={props.open} clicked={props.closed}/>
            <nav>
                <NavLinks />
            </nav>
        </div>
    )
};

export default SideDrawer;