import React from 'react';
import '../../../../App.css';
import NavItem from './NavItem';
import ButtonPill from '../../../UI/ButtonPill';

const NavLinks = () => {
  return (
    <ul className='NavLinks'>
      <NavItem link='/about'>About</NavItem>
      <NavItem link='/initiatives'>Initiatives</NavItem>
      <NavItem link='/projectjam'>Project Jam</NavItem>
      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <ButtonPill link='http://bit.ly/joinproductbuds' target='_blank'>
          Join Our Community
        </ButtonPill>
      </div>
    </ul>
  );
};

export default NavLinks;
