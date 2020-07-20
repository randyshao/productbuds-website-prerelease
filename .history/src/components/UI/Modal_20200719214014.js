import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const Modal = (props) => {
    return (
        <Auxiliary>
            <div className='Modal'> 
                style={{
                    transform: props.show ? 'translate(0)' : 'translateY(-100vh)', 
                    opacity: props.show ? '1' : '0'
                    }}>
                {props.children}
            </div> 
        </Auxiliary>
        
    )
}

export default Modal;