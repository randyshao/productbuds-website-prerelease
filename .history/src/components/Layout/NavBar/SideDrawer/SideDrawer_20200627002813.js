import React from 'react';
import Logo from '../../../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import '../../../../App.css';
import Backdrop from '../../../UI/Backdrop';

const SideDrawer = (props) => {

    let attachedClasses = ['SideDrawer', 'Close'];

    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }

    return (
        <Modal />
        <div className={attachedClasses.join(' ')}>
            <Logo height='11%' show={props.open} clicked={props.closed}/>
            <nav>
                <NavLinks />
            </nav>
        </div>
    )
};

export default SideDrawer;