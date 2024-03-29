import styled from 'styled-components';

import {
    IStyledBoxProps,
    IStyledHelperBoxProps,
    IStyledInputProps,
} from './interface';

const StyledInputContainer = styled.div`
    width: auto;
    height: auto;
    border:none;
    padding: 10px 0 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledInputBox = styled.div<IStyledBoxProps>`
    border: 2px solid #D3D3D3;
    border-color: ${props => props.isFocused ? props.borderColor:'D3D3D3'};
    border-radius: ${props => props.borderRadius}px;
    width: ${props => props.width}px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease-in-out;
    position: relative;
    ::before {
        content: '${props => props.placeholder}';
        position: absolute;
        transition: all 200ms ease-in-out;
        left: ${props => props.isFocused ? '0':'5%'};
        transform: ${props => props.isFocused ? 'translateY(calc(-110% - 10px))':''};
        z-index: -1;
        color: ${props => props.isFocused ? props.borderColor:'#D3D3D3'};
        font-size: ${props => props.isFocused ? props.fontSize - 2:props.fontSize - 1}px; 
    };
`;

const StyledInput = styled.input<IStyledInputProps>`
    width: 95%;
    font-size: ${props => props.fontSize}px;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 10px 0 10px 0;
`;

const StyledHelperBox = styled.div<IStyledHelperBoxProps>`
    width: ${props => props.width}px;
    height: auto;
    p {
        margin: 0;
        text-align: left;
        color: #8A8D89
        font-size: ${props => props.fontSize - 4}px;
    }
    .helper {
        color: ${props => props.helperColor ? props.helperColor:'#8A8D89'};
    }
`;

export {
    StyledInputContainer,
    StyledInputBox,
    StyledInput,
    StyledHelperBox,
};