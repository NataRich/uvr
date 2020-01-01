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
    return (
        <>
            <div>
                <Logo {...defaultLogoAttributes} />
            </div>
            <div>
                {
                    user ? (
                        <img src={user.getThumbImage()} alt='profile' />
                    ):(
                        <Button {...{style: defaultButtonAttributes.style,
                                    props: defaultButtonAttributes.props,
                                    onClickHandler}} />
                    )
                }
            </div>
        </>
    );
};

export default Navigation;

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