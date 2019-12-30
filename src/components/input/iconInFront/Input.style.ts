import styled from 'styled-components';

import { IconInFrontInputStyle } from './interface';

const StyledInputPaddingLeft: number = 15;

const StyledInputContainer = styled.div<IconInFrontInputStyle>`
    width: ${props => props.inputWidth + props.imgWidth + StyledInputPaddingLeft}px;
    height: ${props => props.imgWidth}px;
    display: flex;
    justify-content: start;
    align-items: center;
    background: #FFF;
    padding: 3px;
    border: ${props => props.hasBorder ? '1.5px solid': 'none'};
    border-color: ${props => props.hasBorder ? props.borderColor: ''};
    border-radius: ${props => props.hasBorder ? props.borderRadius:0}px;
`;

const StyledBox = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImg = styled.img<{imgWidth: number;}>`
    width: ${props => props.imgWidth}px;
    height: ${props => props.imgWidth}px;
`;

const StyledInput = styled.input<IconInFrontInputStyle>`
    width: ${props => props.inputWidth}px;
    height: 90%;
    font-size: ${props => props.fontSize}px;
    outline: none;
    border: none;
    padding-left: ${StyledInputPaddingLeft}px;
    background: #FFF;
    border-bottom: ${props => props.hasBorder ? 'none':'1px solid'};
    border-color: ${props => props.borderColor};
    ::placeholder {
        font-size: ${props => props.fontSize - 1}px;
        color: #D3D3D3;
    }
`;

export {
    StyledInputContainer,
    StyledBox,
    StyledImg,
    StyledInput,
};