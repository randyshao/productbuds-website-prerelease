import React from 'react';
import '../../../App.css';
import Logo from '../../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';
import DrawerToggle from './SideDrawer/DrawerToggle'

const NavBar = (props) => {
    return (
        <header className="Navbar">
            <DrawerToggle />
            <Logo height='80%'/>
            <nav className='DesktopOnly'>
                <NavLinks />
            </nav>
        </header>
    )
};

export default NavBar;