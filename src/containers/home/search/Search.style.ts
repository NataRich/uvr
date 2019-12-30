import styled from 'styled-components';

export const StyledFilterIconContainer = styled.div<{imgWidth: number}>`
    width: auto;
    height: auto;
    cursor: pointer;
    img {
        width: ${props => props.imgWidth}px;
        height: ${props => props.imgWidth}px;
        margin-right: 10px;
    };
`;

export const StyledFilterOptionContainer = styled.div`
    width: 80%;
    height: auto;
    position: absolute;
`;