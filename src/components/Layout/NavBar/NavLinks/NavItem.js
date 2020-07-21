import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = (props) => {

    let attachedClasses = 'active';

    if (props.active) {
        attachedClasses = ['SideDrawer', 'Open']
    }

    return (
        <li className='NavItem'>
            <NavLink 
                to={props.link}
                exact={props.exact}
                activeClassName='active'>{props.children}</NavLink>
        </li>
    )
}

export default NavItem;