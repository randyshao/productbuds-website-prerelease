import React from 'react';
import PBLogo from '../../assets/images/flat-logo-transparent.png';
import SingleLogo from '../../assets/images/single.svg';


const Logo = (props) => {
    return (
        <div className="Logo" style={{height: props.height}}>
            <img src={PBLogo} alt="Product Buds Logo"/>
        </div>
    )
};

export default Logo;