import React from 'react';

const Modal = (props) => {
    return (
        <div className='Modal' 
             style={{
                 transform: props.show ? 'translate(0)' : 'translateY(-100vh)', 
                 opacity: props.show ? '1' : '0'
                }}>
            {props.children}
        </div> 
    )
}

export default Modal;