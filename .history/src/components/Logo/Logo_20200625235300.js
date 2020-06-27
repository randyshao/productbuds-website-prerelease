import React from 'react';
import PBLogo from '../../assets/images/flat-logo.png';
import '../../App.css';

const Logo = (props) => {
    return (
        <div>
            <img src={PBLogo} alt="Product Buds Logo"/>
        </div>
    )
};

export default Logo;