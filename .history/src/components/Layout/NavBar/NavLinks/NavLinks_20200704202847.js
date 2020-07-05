import React from 'react';
import '../../../../App.css';
import NavItem from './NavItem';
import ButtonPill from '../../../UI/ButtonPill'

const NavLinks = () => {
    return (
        <ul className='NavLinks'>
            <NavItem link='/'>About</NavItem>
            <NavItem link='/'>Join Us</NavItem>
        </ul>
    )
};

export default NavLinks;