import React from 'react';

const NavItem = (props) => {
    return (
        <li className='NavItem'>
            <a 
                href={props.link}
                className={props.active ? active : null}>{props.children}</a>
        </li>
    )
}

export default NavItem;