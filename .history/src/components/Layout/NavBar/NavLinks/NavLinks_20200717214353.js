import React from 'react';
import '../../../../App.css';
import NavItem from './NavItem';
import ButtonPill from '../../../UI/ButtonPill';

const NavLinks = () => {
    return (
        <ul className='NavLinks'>
            <NavItem link='/about'>About</NavItem>
            <NavItem link='/initiatives'>Initiatives</NavItem>
            <div>
                <ButtonPill link='http://bit.ly/joinproductbuds'>Join Our Community</ButtonPill>
            </div>
        </ul>
    )
};

export default NavLinks;