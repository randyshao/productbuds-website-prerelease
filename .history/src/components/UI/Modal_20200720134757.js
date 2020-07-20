import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Backdrop from '../UI/Backdrop';

const Modal = (props) => {
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className='Modal' 
                style={{
                    transform: props.show ? 'translate(0)' : 'translateY(-100vh)', 
                    opacity: props.show ? '1' : '0'
                    }}>
                {props.children}
            </div> 
        </Auxiliary>
        
    )
}

export default React.memo(
    Modal,
    (prevProps, nextProps) =>
      nextProps.show === prevProps.show &&
      nextProps.children === prevProps.children
);