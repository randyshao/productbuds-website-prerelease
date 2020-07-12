import React, { useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavBar from './NavBar/NavBar';
import SideDrawer from './NavBar/SideDrawer/SideDrawer';
import Footer from './Footer/Footer';
import CallToAction from './CallToAction/CallToAction'
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
                {props.children}
            </main>
            <CallToAction />
            <Footer />
        </Auxiliary>
    )
}

export default Layout;