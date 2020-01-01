import React from 'react';
import styled, { keyframes } from 'styled-components';

import Logo from '../../../components/UVRLogo/Logo';
import Button from '../../../components/button/rounded/RoundedButton';
import { NavProps } from './Logistics';
import {
    defaultLogoAttributes,
    defaultButtonAttributes,
} from './Logistics';

const Navigation: React.FC<NavProps> = ({
    user,
    isFetchingUser,
}) => {
    const onClickHandler = () => window.location.href='/login';

    if (isFetchingUser)
        return (
            <>
            <div>
                <Logo {...defaultLogoAttributes} />
            </div>
            <div>
                <StyledBtnLoader>
                    <div className='highlight' />
                </StyledBtnLoader>
            </div>
        </>
        );
    else if (!user)
        return (
            <>
                <div>
                    <Logo {...defaultLogoAttributes} />
                </div>
                <div>
                    <Button {...{style: defaultButtonAttributes.style,
                                props: defaultButtonAttributes.props,
                                onClickHandler}} />
                </div>
            </>
    );
    else
        return (
            <>
                <div>
                    <Logo {...defaultLogoAttributes} />
                </div>
                <div style={{
                    borderColor: getBorderColor(user.getIdentity()),
                }}>
                    <img src={user.getThumbImage()} alt='profile' />
                </div>
            </>
        );
};

export default Navigation;

const getBorderColor = (identity: number): string => {
    switch (identity) {
        case 1111:
            return '#0165A3';
        case 8888:
            return '#8A2BE2';
        case 9999:
            return '#FFFF00';
        default:
            return '#4169E1';
    };
};

const movingK = keyframes`
    from {
        transform: translateX(0px)
    }

    to {
        transform: translateX(100px);
    }
`;

const StyledBtnLoader = styled.div`
    width: 100px;
    height: 40px;
    border-radius: 5px;
    background-color: #EEE;
    overflow: hidden;
    .highlight {
        width: 5px;
        height: 40px;
        position: absolute;
        background-color: #EEE;
        filter: brightness(97%);
        box-shadow: 0px 0px 25px 5px #EEE;
        animation: ${movingK} 3s ease-in-out infinite;
    };
`;