import React from 'react';
import '../../../../App.css';
import NavItem from './NavItem';
import ButtonPill from '../../../UI/ButtonPill';

const NavLinks = () => {
    return (
        <ul className='NavLinks'>
            <NavItem link='/about'>About</NavItem>
            <NavItem link='/initiatives'>Initiatives</NavItem>
            <ButtonPill link='bit.ly/joinproductbuds' color='white'>Join Our Community</ButtonPill>
        </ul>
    )
};

export default NavLinks;