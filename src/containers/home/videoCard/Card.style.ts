import styled from 'styled-components';

export const StyledVideoCardContainer = styled.div`
    width: 300px;
    height: 206px;
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
                height: 17px;
                p { 
                    font-size: 14px;
                    font-family: 'Lato', sans-serif;
                    font-weight: bold;
                    justify-content: center;
                };
            };
            .overflow {
                overflow-x: scroll;
                ::-webkit-scrollbar {
                    display: none;
                };
                p {
                    width: 150%;
                    justify-content: flex-start;
                };
            };
            .con-home-plaza-vcard-vimg {
                width: 100%;
                height: 70%;
            };
            .con-home-plaza-vcard-btn-group {
                width: 100%;
                height: 30px;
                display: flex;
                justify-content: space-around;
                align-items: center;
            };
            .con-home-plaza-vcard-description {
                width: 95%;
                height: 130px;
                overflow-y: scroll;
                p {
                    font-size: 14px;
                    color: #999;
                    justify-content: flex-start;
                };
            };
            .con-home-plaza-vcard-others {
                width: 100%;
                height: 18px;
                float: left;
                margin-left: 5px;
                P {
                    color: #B3B3B3;
                    font-size: 14px;
                    justify-content: flex-start;
                }
            }
        };
    };
`;