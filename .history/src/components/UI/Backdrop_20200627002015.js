import React from 'react';
import '../../App.css';

const Backdrop = (props) => {
    props.show ? <div className='Backdrop'></div> : null;
}

export default Backdrop;