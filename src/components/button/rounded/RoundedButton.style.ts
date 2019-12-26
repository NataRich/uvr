import styled, { keyframes, css } from 'styled-components';

import { RoundedButtonStyle } from './interface';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const animationMixin = css`
    animation: ${rotate} 2s 300ms linear infinite;
`;

export const StyledRoundedButton = styled.button<RoundedButtonStyle & {isLoading: boolean, disabled: boolean}>`
    width: ${props => props.isLoading ? props.height:props.width}px;
    height: ${props => props.height}px;
    border-radius: ${props => props.isLoading ? props.height:props.borderRadius}px;
    background-color: ${props => props.isLoading ? '#FFF':props.backgroundColor};
    color: ${props => props.isLoading ? 'transparent':props.fontColor};
    outline: none;
    border: ${props => props.isLoading ? '5px solid':'none'};
    border-color: ${props => props.isLoading ? props.backgroundColor: ''};
    border-right-color: ${props => props.isLoading ? props.loadingBorderColor:''};
    font-size: ${props => props.fontSize}px;
    cursor: ${props => props.isLoading || props.disabled ? 'none':'pointer'};
    pointer-events: ${props => props.isLoading || props.disabled ? 'none': 'auto'};
    filter: ${props => props.isLoading || props.disabled ? 'brightness(90%)':'none'};
    transition: width 300ms 0ms ease-in-out;
    ${props => props.isLoading ? animationMixin:'animation: none'};
`;