import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavBar from './NavBar/NavBar';

const Layout = (props) => {
    return (
    <Auxiliary>
        <div>Navbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxiliary>
    )
}

export default Layout;