import styled, { AnyStyledComponent } from 'styled-components';

const CenterBoxByRowNonSpaced: AnyStyledComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterBoxByRowSpaced: AnyStyledComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const CenterBoxByColNonSpaced: AnyStyledComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CenterBoxByColSpaced: AnyStyledComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const GlobalStyled: Record<string, AnyStyledComponent> = {
    CenterBoxByRowNonSpaced,
    CenterBoxByRowSpaced,
    CenterBoxByColNonSpaced,
    CenterBoxByColSpaced,
};

export const GlobalConst: Record<string, string> = {
    baseFont: "'Source Sans Pro', sans-serif",
};