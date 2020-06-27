import React from 'react';
import '../../../App.css';
import Logo from '../../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';

const NavBar = (props) => {
    return (
        <header className="Navbar">
            <div>SIDEDRAWER TOGGLE</div>
            <div>
                <Logo />
            </div>
            <nav>
                <NavLinks />
            </nav>
        </header>
    )
};

export default NavBar;