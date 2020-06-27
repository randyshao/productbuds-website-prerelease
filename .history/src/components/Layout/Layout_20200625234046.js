import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import NavBar from './NavBar/NavBar';

const Layout = (props) => {
    return (
    <Auxiliary>
        <NavBar />
        <main>
            {props.children}
        </main>
    </Auxiliary>
    )
}

export default Layout;