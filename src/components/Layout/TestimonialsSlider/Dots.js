import React from 'react';
import styled from 'styled-components';

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Dots = styled.span`
  height: 20px;
  width: 20px;
  margin: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::before {
    content: '';
    height: 6px;
    width: 6px;
    background-color: #a3e585;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    background-color: #307f1a;
  }
`;

export default function Dots({ slides, activeIndex, handleClick }) {
  return (
    <DotContainer>
      {slides.map((slide, i) => (
        <Dots
          key={i}
          active={activeIndex === i}
          onClick={() => {
            handleClick(i);
          }}
        />
      ))}
    </DotContainer>
  );
}
