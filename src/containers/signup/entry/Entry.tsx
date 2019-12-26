import React, { useState } from 'react';

import Button from '../../../components/button/rounded/RoundedButton';
import Logo from '../../../components/UVRLogo/Logo';
import {
    defaultLogoAttributes,
    defaultButtonAttributes,
} from './Logistics';
import { LocalButtonAttributes } from './interface';
import { StyledTextBox } from './Entry.style';

const Entry: React.FC = () => {
    const [ buttonAttri ] = useState<LocalButtonAttributes>(defaultButtonAttributes);
    const onClickHandler = () => window.location.href = '/login';
    return (
        <>
            <div style={{
                position: 'absolute', 
                top: '0', 
                left: '0'
                }}>
                <Logo {...{style: defaultLogoAttributes.style,
                    props: defaultLogoAttributes.props}}/>
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