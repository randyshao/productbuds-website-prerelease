import React from 'react';
import Logo from '../../../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import '../../../../App.css';

const SideDrawer = (props) => {
    return (
        <div className='SideDrawer'>
            <Logo />
            <nav>
                <NavLinks />
            </nav>
        </div>
    )
};

export default SideDrawer;