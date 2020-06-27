import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavBar from './NavBar/NavBar';
import Logo from '../Logo/Logo';
import SideDrawer from './NavBar/SideDrawer/SideDrawer'

const Layout = (props) => {
    return (
        <Auxiliary>
            <NavBar />
            <SideDrawer />
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;