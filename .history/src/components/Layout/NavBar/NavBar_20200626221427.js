import React from 'react';
import '../../../App.css';
import Logo from '../../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';

const NavBar = (props) => {
    return (
        <header className="Navbar">
            <div>SIDEDRAWER TOGGLE</div>
            <Logo height='80%'/>
            <nav>
                <NavLinks />
            </nav>
        </header>
    )
};

export default NavBar;