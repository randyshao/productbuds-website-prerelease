import React from 'react';
import '../../../App.css';
import Logo from '../../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';
import DrawerToggle from './SideDrawer/DrawerToggle'

const NavBar = (props) => {
    return (
        <header className="Navbar">
            <div>
                <div className='LogoContainer'>
                    <Logo />
                    <h1>Product Buds</h1>
                </div>
                <nav className='DesktopOnly'>
                    <NavLinks />
                </nav>
                <DrawerToggle clicked={props.drawerToggleClicked}/>
            </div>
        </header>
    )
};

export default NavBar;