import React from 'react';
import '../../../../App.css';
import NavItem from './NavItem';
import ButtonPill from '../../../UI/ButtonPill';

const NavLinks = () => {
    return (
        <ul className='NavLinks'>
            <NavItem link='/about'>About</NavItem>
            <NavItem link='/Initiatives'>Initiatives</NavItem>
            <ButtonPill />
        </ul>
    )
};

export default NavLinks;