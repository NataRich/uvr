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
    
    const onClickHandler = () => window.location.href = '/login';

    return (
        <>
            <div style={{
                position: 'absolute', 
                top: '0', 
                left: '0'
                }}>
                <Logo {...defaultLogoAttributes}/>
            </div>
            <StyledTextBox>
                <p>Welcom Back!</p>
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