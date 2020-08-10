import React from 'react';

const ButtonPill = (props) => {
  return (
    <div>
      <a className='PillLink' href={props.link} target={props.target}>
        <button className='Pill'>{props.children}</button>
      </a>
    </div>
  );
};

export default ButtonPill;
