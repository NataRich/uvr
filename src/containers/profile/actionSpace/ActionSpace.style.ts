import styled, { keyframes } from 'styled-components';

const movingK = keyframes`
    from {
        transform: translateX(-70px)
    }

    to {
        transform: translateX(370px);
    }
`;

const StyledActionSpaceLoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .highlight {
        width: 5px;
        height: 100%;
        position: absolute;
        background-color: #EEE;
        filter: brightness(97%);
        box-shadow: 0px 0px 30px 25px #EEE;
        animation: ${movingK} 3s ease-in-out infinite;
    };
    .section {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
    .area {
        width: 80%;
        height: 40%;
        margin-bottom: 15px;
    };
    .input {
        width: 80%;
        height: 30px;
        margin-bottom: 15px;
    };
    .loader {
        background-color: #EEE;
        overflow: hidden;
        position: relative;
    };
`;

const StyledSpan = styled.span`
    width: 20px;
    height: 20px;
    img {
        width: 100%;
        height: 100%;
    };
`;

export {
    StyledActionSpaceLoaderContainer,
    StyledSpan,
};