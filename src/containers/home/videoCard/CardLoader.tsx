import React from 'react';
import styled, { keyframes } from 'styled-components';

const PlazaLoader: React.FC<{innerWidth: number}> = ({
    innerWidth
}) => {
    return (
        <StyledLoadingCardContainer {...{innerWidth}}>
            <div className='img loader'>
                <div className='highlight' />
            </div>
            <div className='whitespace' />
            <div className='title loader'>
                <div className='highlight' /> 
            </div>
            <div className='whitespace' />
            <div className='btn-group'>
                <div className='btn loader'>
                    <div className='highlight' />
                </div>
                <div className='btn loader'>
                    <div className='highlight' />
                </div>
            </div>
        </StyledLoadingCardContainer>
    );
};

export default PlazaLoader;

const movingK = keyframes`
    from {
        transform: translateX(-70px)
    }

    to {
        transform: translateX(370px);
    }
`;

const StyledLoadingCardContainer = styled.div<{innerWidth: number}>`
    width: 260px;
    height: 206px;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: ${props => (props.innerWidth - 900)/6}px;
    margin-right: ${props => (props.innerWidth - 900)/6}px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .highlight {
        width: 5px;
        height: 100%;
        position: absolute;
        background-color: #EEE;
        filter: brightness(97%);
        box-shadow: 0px 0px 30px 25px #EEE;
        animation: ${movingK} 3s ease-in-out infinite;
    };
    .img {
        width: 100%;
        height: 70%;
        position: relative;
    };
    .title {
        width: 100%;
        height: 13%;
        position: relative;
    };
    .whitespace {
        width: 100%;
        height: 2%;
        background-color: #FFF;
    }
    .btn-group {
        width: 100%;
        height: 13%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .btn {
            width: 100px;
            height: 90%;
            border-radius: 50px;
            margin-left: 5px;
            position: relative;
            overflow: hidden;
        };
    };
    .loader {
        background-color: #EEE;
    };
`;