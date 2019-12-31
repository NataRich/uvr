import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        width: 25px;
        height: 25px;
        outline: none;
        border: none;
        text-align: center;
    };
    input:nth-of-type(2) {
        border: 1.5px solid;
        border-color: #D3D3D3;
        transition: border-color 150ms ease-in-out;
        :focus {
            border-color: #1C3144;
        };
    }
`;