import styled from 'styled-components';

export const StyledVideoCardContainer = styled.div`
    width: 260px;
    height: 206px;
    overflow: hidden;
    box-shadow: 0 5px 15px 0 #D3D3D3;
    border-radius: 10px;
    margin-top: 15px;
    margin-left: 30px;
    margin-right: 30px;
    position: relative;
    .del-btn {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 5px;
        z-index: 1000;
    }
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
                    font-size: 12px;
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
                position: relative
                img {
                    width: 100%;
                    height: 100%;
                };
                p {
                    position: absolute;
                    bottom: 0;
                    right: 5%;
                    border-radius: 5px;
                    padding: 2px;
                    color: #FFF;
                    font-size: 12px;
                    background-color: #CCC;
                };
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
                width: 95%;
                height: 18px;
                float: left;
                margin-left: 5px;
                P {
                    color: #B3B3B3;
                    font-size: 14px;
                    justify-content: flex-end;
                }
            }
        };
    };
`;