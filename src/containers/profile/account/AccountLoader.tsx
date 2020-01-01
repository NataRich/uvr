import React from 'react';
import styled, { keyframes } from 'styled-components';

import { GlobalStyled } from '../../../global/style/Style.style';
import Logo from '../../../components/UVRLogo/Logo';
import { defaultLogoAttributes } from './Logistics';
import { StyledLogoContainer } from './Account.style';

const AccountLoader: React.FC = () => {
    return (
        <StyledAccountLoaderContainer>
            <StyledLogoContainer>
                <Logo {...{style: defaultLogoAttributes.style,
                        props: defaultLogoAttributes.props}} />
            </StyledLogoContainer>
            <div className='container'>
                <div className='profile loader'>
                <   div className='highlight' />
                </div>
                <div className='short loader'>
                    <div className='highlight' />
                </div>
                <div className='long loader'>
                    <div className='highlight' />
                </div>
            </div>
            <GlobalStyled.Box.CenterBoxByRowSpaced style={{ height: '10%' }}>
                <div className='input loader'>
                    <div className='highlight' />
                </div>
                <div className='btn loader'>
                    <div className='highlight' />
                </div>
            </GlobalStyled.Box.CenterBoxByRowSpaced>
            <GlobalStyled.Box.CenterBoxByRowSpaced style={{ height: '10%' }}>
                <div className='input loader'>
                    <div className='highlight' />
                </div>
                <div className='btn loader'>
                    <div className='highlight' />
                </div>
            </GlobalStyled.Box.CenterBoxByRowSpaced>
            <GlobalStyled.Box.CenterEndBoxByCol style={{ height: '30%' }}>
                <div className='long loader'>
                    <div className='highlight' />
                </div>
            </GlobalStyled.Box.CenterEndBoxByCol>
        </StyledAccountLoaderContainer>
    );
};

export default AccountLoader;

const movingK = keyframes`
    from {
        transform: translateX(-10px)
    }

    to {
        transform: translateX(300px);
    }
`;

const StyledAccountLoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    .highlight {
        width: 5px;
        height: 90%;
        position: absolute;
        background-color: #EEE;
        filter: brightness(97%);
        box-shadow: 0px 0px 20px 10px #EEE;
        animation: ${movingK} 3s ease-in-out infinite;
    };
    .container {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
    .profile {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        position: relative;
        overflow: hidden;
    };
    .short {
        width: 100px;
        height: 40px;
        margin-bottom: 5px;
        position: relative;
        overflow: hidden;
    };
    .long {
        width: 180px;
        height: 40px;
        position: relative;
        overflow: hidden;
    };
    .input {
        width: 190px;
        height: 40px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
    };
    .btn {
        width: 70px;
        height: 40px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
    };
    .loader {
        background-color: #EEE;
    };
`;