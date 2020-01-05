import React, { useState } from 'react';

import { IPreRoundedButtonAttributes } from '../../../global/utils/Style';
import Button from '../../../components/button/rounded/RoundedButton';
import Logo from '../../../components/UVRLogo/Logo';

import {
    defaultLogoAttributes,
    defaultButtonAttributes,
} from './Logistics';
import { StyledTextBox } from './Entry.style';

const Entry: React.FC = () => {
    const [ buttonAttri ] = useState<IPreRoundedButtonAttributes>(defaultButtonAttributes);
    const onClickHandler = () => window.location.href = '/signup';
    return (
        <>
            <div style={{
                position: 'absolute', 
                top: '0', 
                right: '0'
                }}>
                <Logo {...defaultLogoAttributes}/>
            </div>
            <StyledTextBox>
                <p>You don't need an account to watch VR videos.</p>
                <p>BUT</p>
                <p>You do need an account to upload VR videos.</p>
                <p>It is up to you!</p>
            </StyledTextBox>
            <div>
                <Button {...{style: buttonAttri.style, 
                            props: buttonAttri.props,
                            onClickHandler,}} />
            </div>
        </>
    );
};

export default Entry;