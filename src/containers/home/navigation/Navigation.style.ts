import styled, { keyframes } from 'styled-components';


const getBorderColor = (identity: number): string => {
    switch (identity) {
        case 1111:
            return '#0165A3';
        case 8888:
            return '#8A2BE2';
        case 9999:
            return '#FFFF00';
        default:
            return '#4169E1';
    };
};

const movingK = keyframes`
    from {
        transform: translateX(0px)
    }

    to {
        transform: translateX(100px);
    }
`;

const StyledBtnLoader = styled.div`
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: #EEE;
    overflow: hidden;
    .highlight {
        width: 5px;
        height: 40px;
        position: absolute;
        background-color: #EEE;
        filter: brightness(97%);
        box-shadow: 0px 0px 25px 5px #EEE;
        animation: ${movingK} 3s ease-in-out infinite;
    };
`;

const StyledProfileContainer = styled.div<{identity: number}>`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${props => getBorderColor(props.identity)};
    cursor: pointer;
    img {
        width: 80%;
        height: 80%;
    };
`;

export {
    StyledBtnLoader,
    StyledProfileContainer,
};