import React from 'react';
import '../../../../App.css';
import NavItem from './NavItem';

const NavLinks = () => {
    return (
        <ul className='NavLinks'>
            <li className='NavItem'><a href="/">About</a></li>
            <li className='NavItem'><a href="/">Join Us</a></li>
        </ul>
    )
};

export default NavLinks;