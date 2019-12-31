import styled from 'styled-components';

export const StyledTallContainer = styled.div`
    width: 100%;
    height: 150%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .p-home-about-btn_fixed {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 1000;
        button {
            width: inherit;
            height: inherit;
            border-radius: inherit;
            background: linear-gradient(to top left, #0165A3 0%, #149E9A 100%);
            cursor: pointer;
            border: none;
            outline: none;
            color: #E0FFFE;
            transition: transform 300ms ease-in-out;
        };
    };
    .p-home-about-card_fixed {
        width: 80%;
        height: 80%;
        bottom: 10%;
        left: 10%;
        position: fixed;
        border-radius: 10px;
    };
`;