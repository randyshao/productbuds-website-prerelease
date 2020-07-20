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
        background-color: #A3E585;
        border-radius: 50%;
        transition: background-color .3s ease;
    }

    &:hover::before {
        background-color: #307F1A;
    }
`;

export default function Dots({slides, activeIndex, handleClick}) {
    return (
        <DotContainer>
            {Object.keys(quotes).map(index => (
                <Dots
                    onClick={event => buttonClickHandler(event)}
                    data-quote={index}
                    key={index} 
                />
            ))}
        </DotContainer>
    );    
}
