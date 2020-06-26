import React from 'react';
import Aux from '../../hoc/Auxiliary';


const Layout = (props) => {
    <Auxiliary>

    
    <div>Navbar, SideDrawer, Backdrop</div>
    <main>
        {props.children}
    </main>
    </Auxiliary>
}