import styled, { keyframes } from 'styled-components';

import { getBorderColor } from '../../../global/utils/utils';

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