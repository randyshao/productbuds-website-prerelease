import React, { useState } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const Person = (props) => {
  return (
    <Auxiliary>
      <div className='Profile'>
        <a href={props.linkedin} target='_blank'>
          <img className='Headshot' src={props.headshot} alt={props.name} />
        </a>
        <h2>{props.name}</h2>
        <h3>{props.role}</h3>
      </div>
    </Auxiliary>
  );
};

export default Person;
