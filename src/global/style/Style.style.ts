import styled from 'styled-components';

const CenterBoxByRowNonSpaced = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterBoxByRowSpaced = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const CenterBoxByColNonSpaced = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CenterBoxByColSpaced = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const CenterBoxByColXSpaced = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const CenterLeftBoxByRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const AutoWidthFullHeightNonMargin = styled.p`
    width: auto;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FullWidthAutoHeightNonMargin = styled.p`
    width: 100%;
    height: auto;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GlobalStyled = {
    Box: {
        CenterBoxByRowNonSpaced,
        CenterBoxByRowSpaced,
        CenterBoxByColNonSpaced,
        CenterBoxByColSpaced,
        CenterBoxByColXSpaced,
        CenterLeftBoxByRow,
    },
    Text: {
        AutoWidthFullHeightNonMargin,
        FullWidthAutoHeightNonMargin,
    }
};