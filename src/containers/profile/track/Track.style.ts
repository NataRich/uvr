import styled, { keyframes } from 'styled-components';

const movingK = keyframes`
    from {
        transform: translateX(-20px)
    }

    to {
        transform: translateX(170px);
    }
`;

const StyledDivLoader = styled.div`
    width: 150px;
    height: 30px;
    border-radius: 50px;
    background-color: #EEE;
    overflow: hidden;
    position: relative;
    .highlight {
        width: 5px;
        height: 100%;
        position: absolute;
        background-color: #EEE;
        filter: brightness(97%);
        box-shadow: 0px 0px 15px 10px #EEE;
        animation: ${movingK} 3s ease-in-out infinite;
    };
`;

const StyledArrowContainer = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 1000;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    };
`;

const StyledContainer = styled.div`
    position: relative;
    .del-btn {
        outline: none;
        border: none;
        font-size: 12px;
        cursor: pointer;
        color: #FFF;
        position: absolute;
        top: 5px;
        right: 15px;
    };
`;

export {
    StyledDivLoader,
    StyledContainer,
    StyledArrowContainer,
};