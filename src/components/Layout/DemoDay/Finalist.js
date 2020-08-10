import React from 'react';

const Finalist = (props) => {
  return (
    <div style={{ width: '275px' }} className='Profile'>
      <h2>{props.company}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Finalist;
