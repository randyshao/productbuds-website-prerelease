import React from 'react';
import '../../../App.css';
import Logo from '../../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';
import DrawerToggle from './SideDrawer/DrawerToggle'

const NavBar = (props) => {
    return (
        <header className="Navbar">
            <Logo />
            <nav className='DesktopOnly'>
                <NavLinks />
            </nav>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
        </header>
    )
};

export default NavBar;