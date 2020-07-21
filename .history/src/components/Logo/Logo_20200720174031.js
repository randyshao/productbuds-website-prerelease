import React from 'react';
import PBLogo from '../../assets/images/full-color-logo.svg';
import SingleLogo from '../../assets/images/single-logo.svg';


const Logo = (props) => {
    return (
        <div>
            <div className="SingleLogo" style={{height: props.height}}>
                <img src={SingleLogo} alt="Product Buds Logo"/>
            </div>
            <div className="Logo DesktopOnlyMedium" style={{height: props.height}}>
                <img src={PBLogo} alt="Product Buds Logo"/>
            </div>
        </div>
    )
};

export default Logo;