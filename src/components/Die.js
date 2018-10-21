import React from 'react';
import styled from 'styled-components';

const StyledDie = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid red;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    font-weight: bold;
`;

const Die = (props) => {
    return (
        <StyledDie id={props.id} onClick={props.rollDie}>{props.number}</StyledDie>
    )
}

export default Die;
