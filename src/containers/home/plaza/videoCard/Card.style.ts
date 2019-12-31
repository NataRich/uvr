import styled from 'styled-components';

export const StyledVideoCardContainer = styled.div`
    width: 300px;
    height: 256px;
    overflow: hidden;
    box-shadow: 0 5px 15px 0 #D3D3D3;
    border-radius: 10px;
    margin-top: 15px;
    .track {
        width: 200%;
        height: 100%;
        display: flex;
        transition: transform 300ms ease-in-out;
        .slide {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .con-home-plaza-vcard-title {
                width: 95%;
                height: auto;
                p { 
                    font-family: 'Lato', sans-serif;
                    justify-content: flex-start;
                    font-weight: bold;
                };
            };
            .con-home-plaza-vcard-vimg {
                width: 100%;
                height: 70%;
            };
            .con-home-plaza-vcard-btn-group {
                width: 100%;
                height: 10%;
                display: flex;
                justify-content: space-around;
                align-items: center;
            };
            .con-home-plaza-vcard-description {
                width: 95%;
                height: auto;
            };
            .con-home-plaza-vcard-others {
                float: left;
                margin-left: 5px;
            }
        };
    };
`;