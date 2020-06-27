import React from 'react';
import PBLogo from '../../assets/images/flat-logo-transparent.png';
import '../../App.css';

const Logo = (props) => {
    return (
        <div className="Logo">
            <img src={PBLogo} alt="Product Buds Logo"/>
        </div>
    )
};

export default Logo;