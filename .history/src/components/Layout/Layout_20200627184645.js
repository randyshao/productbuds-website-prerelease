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
            
                <NavBar drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer open={showSideDrawer} closed={sideDrawerHandler}/>
                <main className='Content'>
                    <div className='Container'>
                    {props.children}
                    </div>
                </main>
            
            
        </Auxiliary>
    )
}

export default Layout;