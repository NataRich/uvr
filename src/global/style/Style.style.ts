import styled, { AnyStyledComponent } from 'styled-components';

const CenterInBox: AnyStyledComponent = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const GlobalStyled: Record<string, AnyStyledComponent> = {
    CenterInBox,
};

export const GlobalConst: Record<string, string> = {
    baseFont: "'Source Sans Pro', sans-serif",
};