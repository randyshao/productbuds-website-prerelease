import React from 'react';

const Sponsor = (props) => {
  return (
    <div className='Sponsor'>
      <a href={props.link} target='_blank'>
        <img src={props.logo} />
      </a>
    </div>
  );
};

export default Sponsor;
