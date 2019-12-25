import styled from 'styled-components';

import { RoundedButtonStyle } from './interface';

export const StyledRoundedButton = styled.button<RoundedButtonStyle>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: ${props => props.borderRadius}px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.fontColor};
    outline: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
`;