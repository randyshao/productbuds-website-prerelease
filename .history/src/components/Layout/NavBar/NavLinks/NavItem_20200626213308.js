import React from 'react';

const NavItem = (props) => {
    return (
        <li className='NavItem'>
            <a href='/'>{props.children}</a>
        </li>
    )
}

export default NavItem;