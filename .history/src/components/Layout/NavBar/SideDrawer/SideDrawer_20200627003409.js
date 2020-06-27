import React from 'react';
import Logo from '../../../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import '../../../../App.css';
import Backdrop from '../../../UI/Backdrop';
import Auxiliary from '../../../../hoc/Auxiliary'

const SideDrawer = (props) => {

    let attachedClasses = ['SideDrawer', 'Close'];

    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }

    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height='11%' show={props.open} clicked={props.closed}/>
                <nav>
                    <NavLinks />
                </nav>
            </div>
        </Auxiliary>
        
    )
};

export default SideDrawer;