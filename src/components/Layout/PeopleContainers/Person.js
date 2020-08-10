import React, { useState } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const Person = (props) => {
  return (
    <Auxiliary>
      <div className='Profile'>
        <img className='Headshot' src={props.headshot} alt={props.name} />
        <h2>{props.name}</h2>
        <h3>{props.role}</h3>
      </div>
    </Auxiliary>
  );
};

export default Person;
