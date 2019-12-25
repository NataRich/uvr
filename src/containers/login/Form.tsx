import React, { useState } from 'react';

import { GlobalStyled } from '../../global/style/Style.style';

import Input from '../../components/input/labelEffect/Input';
import {
    LabelEffectInputProps,
    LabelEffectInputStyle,
} from '../../components/input/labelEffect/interface';
import {
    defaultAccountProps,
    defaultPasswordProps,
    defaultInputStyle,
} from './Logistics';

import Button from '../../components/button/rounded/RoundedButton';
import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../components/button/rounded/interface';
import {
    defaultConfirmButtonProps,
    defaultLogInButtonProps,
    defaultButtonStyle,
} from './Logistics';


const Form: React.FC = () => {
    const [ inputStyle, setInputStyle ]                 = useState<LabelEffectInputStyle>(defaultInputStyle);
    const [ accountProps, setAccountProps ]             = useState<LabelEffectInputProps>(defaultAccountProps);
    const [ passwordProps, setPasswordProps ]           = useState<LabelEffectInputProps>(defaultPasswordProps);
    const [ buttonStyle, setButtonStyle ]               = useState<RoundedButtonStyle>(defaultButtonStyle);
    const [ confirmButtonProps, setConfirmButtonProps ] = useState<RoundedButtonProps>(defaultConfirmButtonProps);
    const [ logInButtonProps, setLogInButtonProps ]     = useState<RoundedButtonProps>(defaultLogInButtonProps);
    const [ isAccountConfirmed, setIsAccountConfirmed ] = useState<boolean>(false);

    const onChangeAccountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccountProps({...defaultAccountProps, value: e.currentTarget.value});
    };
    const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordProps({...defaultPasswordProps, value: e.currentTarget.value});
    };
    const onClickConfirmHandler = () => {
        // API call
    };
    const onClickLogInHandler = () => {
        // API call
    };
    return (
        <>
            <div>
                <p>Log In</p>
            </div>
            <div>
                <GlobalStyled.Text.FullWidthAutoHeightNonMargin className='header'>
                    Welcome Back
                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                <GlobalStyled.Text.FullWidthAutoHeightNonMargin className='text'>
                    Enjoy the VR experience!
                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
            </div>
            <div>
                <Input {...{style: inputStyle, props: accountProps, onChangeHandler: onChangeAccountHandler}} />
            </div>
            {
                isAccountConfirmed ? (
                    <>
                        <div>
                            <Input {...{style: inputStyle, props: passwordProps, onChangeHandler: onChangePasswordHandler}} />
                        </div>
                        <div>
                            <Button {...{style: buttonStyle, props: logInButtonProps, onClickHandler: onClickLogInHandler}} />
                        </div>
                    </>
                ): (
                    <div>
                        <Button {...{style: buttonStyle, props: confirmButtonProps, onClickHandler: onClickConfirmHandler}} />
                    </div>
                )
            }
        </>
    );
};

export default Form;