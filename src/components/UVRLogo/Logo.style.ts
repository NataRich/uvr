import styled, { keyframes, css } from 'styled-components';

const text1GoLeftK = keyframes`
    0% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(0);
    }

    40% {
        transform: translateX(-100%);
    }

    80% {
        transform: translate(-100%);
    }

    100% {
        transform: translate(0);
    }
`;

const text1GoRightK = keyframes`
    0% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(0);
    }

    40% {
        transform: translateX(100%);
    }

    80% {
        transform: translate(100%);
    }

    100% {
        transform: translate(0);
    }
`;

const text2GoLeftK = keyframes`
    0% {
        transform: translateX(100%);
    }

    20% {
        transform: translateX(100%);
    }

    40% {
        transform: translateX(0);
    }

    80% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
`;

const text2GoRightK = keyframes`
    0% {
        transform: translateX(-100%);
    }

    20% {
        transform: translateX(-100%);
    }

    40% {
        transform: translateX(0);
    }

    80% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
`;

const textGroupUpK = keyframes`
    0% {
        transform: translateY(90%);
    }

    40% {
        transform: translateY(90%);
    }

    50% {
        transform: translateY(-10%);
    }

    70% {
        transform: translateY(-10%);
    }

    80% {
        transform: translateY(90%);
    }

    100% {
        transform: translateY(90%);
    }
`;

const text1GoLeftA = css`
    animation: ${text1GoLeftK} 10s ease-in-out infinite;
`;
const text1GoRightA = css`
    animation: ${text1GoRightK} 10s ease-in-out infinite;
`;
const text2GoLeftA = css`
    animation: ${text2GoLeftK} 10s ease-in-out infinite;
`;
const text2GoRightA = css`
    animation: ${text2GoRightK} 10s ease-in-out infinite;
`;

export const StyledBox = styled.div<{position: 'LHS' | 'RHS'}>`
    width: inherit;
    height: inherit;
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    overflow: hidden;
    p {
        color: #E0FFFE;
    }
    div {
        overflow: hidden;
    }
    .logo-container {
        cursor: pointer;
    }
    .text1 {
        ${props => props.position === 'LHS' ? text1GoRightA:text1GoLeftA};
    };
    .text2 {
        ${props => props.position === 'LHS' ? text2GoRightA:text2GoLeftA};
    };
    .text-group {
        animation: ${textGroupUpK} 10s ease-in-out infinite;
    };
`;

export const StyledImg = styled.img`
    width: 50px;
    height: 50px;
`;