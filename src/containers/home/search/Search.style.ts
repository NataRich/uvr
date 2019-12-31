import styled from 'styled-components';

export const StyledFilterIconContainer = styled.div<{imgWidth: number}>`
    width: auto;
    height: auto;
    cursor: pointer;
    img {
        width: ${props => props.imgWidth}px;
        height: ${props => props.imgWidth}px;
    };
`;

export const StyledFilterOptionContainer = styled.div`
    width: auto;
    height: auto;
    position: absolute;
    padding: 3px;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
    background-color: #FFF;
    transform: translate(-180px, 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;