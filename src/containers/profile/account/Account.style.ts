import styled from 'styled-components';

import { getBorderColor } from '../../../global/utils/utils';

const StyledLogoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 5px;
`;

const StyledLogOutContainer = styled.div`
    position: absolute;
    top: 0;
    right: 5px;
`;

const StyledProfileImageContainer = styled.div<{identity: number}>`
    width: 150px;
    height: 150px;
    border: 2px solid ${props => getBorderColor(props.identity)};
    border-radius: 150px;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 80%;
        height: 80%;
    };
`;

export {
    StyledLogoContainer,
    StyledLogOutContainer,
    StyledProfileImageContainer,
};