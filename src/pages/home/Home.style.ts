import styled from 'styled-components';

export const StyledTallContainer = styled.div`
    width: 100%;
    height: 200%;
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
    .p-home-search {
        width: 100%;
        height: 45%;
        background: linear-gradient(to top left, #1c3144 0%, #149e9a 100%);
    };
    .p-home-result {
        width: 100%;
        height: 55%;
        background: linear-gradient(to bottom left, #1c3144 0%, #149e9a 100%);
    };
    .p-home-footer {
        width: 100%;
        color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        position: absolute;
        bottom: -100%;
    };
`;