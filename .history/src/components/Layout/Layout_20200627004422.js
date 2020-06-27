import React, { useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavBar from './NavBar/NavBar';
import Logo from '../Logo/Logo';
import SideDrawer from './NavBar/SideDrawer/SideDrawer'

const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(true)

    const sideDrawerHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Auxiliary>
            <NavBar drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer open={showSideDrawer} closed={sideDrawerHandler}/>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;