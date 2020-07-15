import React from 'react';
import PBLogo from '../../assets/images/flat-logo-transparent.png';
import SingleLogo from '../../assets/images/single.svg';


const Logo = (props) => {
    return (
        <div>
            <div className="SingleLogo" style={{height: props.height}}>
                <img src={SingleLogo} alt="Product Buds Logo"/>
            </div>
            <div className="Logo DesktopOnly" style={{height: props.height}}>
                <img src={PBLogo} alt="Product Buds Logo"/>
            </div>
        </div>
    )
};

export default Logo;