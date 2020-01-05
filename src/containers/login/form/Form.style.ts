import styled from 'styled-components';

import { IStyledBoxProp } from './interface';

export const StyledBox = styled.div<IStyledBoxProp>`
    height: auto;
    .con-form-container {
        display: flex;
        flex-direction: column
        justify-content: center;
        align-items: center;
        transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    };
    .con-form-container:nth-child(1) {
        display: ${props => props.isConfirmed ? 'none':'flex'};
    };
    .con-form-container:nth-child(2) {
        visibility: ${props => props.isConfirmed ? 'visible':'hidden'};
        opacity: ${props => props.isConfirmed ? '1':'0'};
        transform: ${props => props.isConfirmed ? 'translateY(0)':'translateY(-10%)'};
    };
`;

export const StyledTextBox = styled.div`
    padding: 5px 0 5px 0;
    p:nth-of-type(1) {
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 10px;
    };
    p:nth-of-type(2) {
        font-size: 17px;
    };
`;