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
import { GlobalStyled } from '../../../global/style/Style.style';

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
                <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ width: 'auto' }}>
                    <GlobalStyled.Text.AutoWidthAutoHeightNonMargin style={{
                            fontSize: '24px',
                            marginRight: '30px',
                            fontWeight: 'bold',
                        }}>
                        Welcom back, {user.getName()}!
                    </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                    <StyledProfileContainer {...{identity: user.getIdentity()}}
                        onClick={onClickProfileHandler}>
                        <img src={user.getThumbImage()} alt='profile' />
                    </StyledProfileContainer>
                </GlobalStyled.Box.CenterBoxByRowNonSpaced>
            </>
        );
};

export default Navigation;