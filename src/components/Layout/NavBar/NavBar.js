import React from 'react';
import '../../../App.css';
import Logo from '../../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';
import DrawerToggle from './SideDrawer/DrawerToggle'

const NavBar = (props) => {
    return (
        <header className="Navbar">
            <div className="Container"> 
                <div className='LogoContainer'>
                    <a href='/'>
                        <Logo />
                    </a>
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