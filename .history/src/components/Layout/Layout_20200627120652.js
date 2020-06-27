import React, { useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavBar from './NavBar/NavBar';
import Logo from '../Logo/Logo';
import SideDrawer from './NavBar/SideDrawer/SideDrawer';
import TitleBanner from './TitleBanner/TitleBanner';
import '../../App.css'

const Layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const sideDrawerHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return (
        <Auxiliary>
            <div className='Container'>
            <NavBar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerHandler}/>
            <main>
                {props.children}
            </main>
            </div>
            
        </Auxiliary>
    )
}

export default Layout;