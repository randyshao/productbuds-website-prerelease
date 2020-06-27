import React from 'react';
import Logo from '../../../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import '../../../../App.css';

const SideDrawer = (props) => {
    return (
        <div className='SideDrawer' style='margin-bottom: 32px'>
            <Logo height='11%' />
            <nav>
                <NavLinks />
            </nav>
        </div>
    )
};

export default SideDrawer;