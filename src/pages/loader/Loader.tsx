import React from 'react';
import styled, { keyframes } from 'styled-components';

import { GlobalStyled } from '../../global/style/Style.style';

const Loader: React.FC = () => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <p style={{ fontSize: '20px' }}>We are preparing the best content for you</p>
            <StyledDots>
                <div className='dot1' />
                <div className='dot2' />
                <div className='dot3' />
            </StyledDots>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Loader;

const dot1K = keyframes`
    0% {
        transform: translateY(0)
    }

    16.666666667% {
        transform: translateY(-100%);
    }

    33.333333333% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(0);
    }
`;

const dot2K = keyframes`
    0% {
        transform: translateY(0)
    }

    16.666666667% {
        transform: translateY(0);
    }

    33.333333333% {
        transform: translateY(-100%);
    }

    50% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(0);
    }
`;

const dot3K = keyframes`
    0% {
        transform: translateY(0)
    }

    33.333333333% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-100%);
    }

    66.666666667% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(0);
    }
`;

const StyledDots = styled.div`
    display: flex;
    div {
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: #000;
        margin: 0 2px 0 5px;
    };
    .dot1 {
        animation: ${dot1K} 3s ease-in-out;
    };
    .dot2 {
        animation: ${dot2K} 3s ease-in-out;
    };
    .dot3 {
        animation: ${dot3K} 3s ease-in-out;
    };
`;