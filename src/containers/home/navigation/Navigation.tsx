import React from 'react';

import Logo from '../../../components/UVRLogo/Logo';
import Button from '../../../components/button/rounded/RoundedButton';
import {
    defaultLogoAttributes,
    defaultButtonAttributes,
} from './Logistics';

const Navigation: React.FC = () => {
    const onClickHandler = () => window.location.href='/login';
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
};

export default Navigation;