import React, { useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavBar from './NavBar/NavBar';
import Logo from '../Logo/Logo';
import SideDrawer from './NavBar/SideDrawer/SideDrawer'

const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(true)

    sideDrawerHandler = () => {
        setShowSideDrawer(true)
    }

    return (
        <Auxiliary>
            <NavBar />
            <SideDrawer open={showSideDrawer} closed={sideDrawerHandler}/>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout;