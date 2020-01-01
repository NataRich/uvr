import React from 'react';

import Logo from '../../../components/UVRLogo/Logo';
import Button from '../../../components/button/rounded/RoundedButton';
import { NavProps } from './Logistics';
import {
    defaultLogoAttributes,
    defaultButtonAttributes,
} from './Logistics';
import {
    StyledBtnLoader,
    StyledProfileContainer,
} from './Navigation.style';

const Navigation: React.FC<NavProps> = ({
    user,
    isFetchingUser,
}) => {
    const onClickLogInHandler = () => window.location.href='/login';
    const onClickProfileHandler = () => window.location.href='/profile';

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
                                onClickHandler: onClickLogInHandler}} />
                </div>
            </>
    );
    else
        return (
            <>
                <div>
                    <Logo {...defaultLogoAttributes} />
                </div>
                <StyledProfileContainer {...{identity: user.getIdentity()}}
                    onClick={onClickProfileHandler}>
                    <img src={user.getThumbImage()} alt='profile' />
                </StyledProfileContainer>
            </>
        );
};

export default Navigation;