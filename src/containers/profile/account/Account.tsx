import React, { useState } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import {
    IEmail,
    IUsername,
    ICode,
} from '../../../global/user/interface';
import { UGAPI, URAPI } from '../../../global/user/request';
import {
    IPreLabelEffectInputAttributes,
    IPreRoundedButtonAttributes
} from '../../../global/utils/Style';
import { Middleware } from '../../../middlewares/API/APIMiddlewares';
import Logo from '../../../components/UVRLogo/Logo';
import Input from '../../../components/input/labelEffect/Input';
import Button from '../../../components/button/rounded/RoundedButton';

import { AccountProps } from './interface';
import {
    defaultLogoAttributes,
    defaultLogOutBtnAttributes,
    defaultNewEmailAttributes,
    defaultNewUsernameAttributes,
    defaultCodeAttributes,
    defaultUpdateButtonAttributes,
    defaultAuthButtonAttributes,
    defaultSendButtonAttributes,
} from './Logistics';
import {
    StyledLogoContainer,
    StyledLogOutContainer,
    StyledProfileImageContainer,
} from './Account.style';

const Account: React.FC<AccountProps> = ({
    user,
}) => {
    const [ logOutBtnAttri, setLogOutBtnAttri ]     = useState<IPreRoundedButtonAttributes>(defaultLogOutBtnAttributes);
    const [ emailAttri, setEmailAttri ]             = useState<IPreLabelEffectInputAttributes>(defaultNewEmailAttributes);
    const [ usernameAttri, setUsernameAttri ]       = useState<IPreLabelEffectInputAttributes>(defaultNewUsernameAttributes);
    const [ codeAttri, setCodeAttri ]               = useState<IPreLabelEffectInputAttributes>(defaultCodeAttributes);
    const [ updateEBtnAttri, setUpdateEBtnAttri ]   = useState<IPreRoundedButtonAttributes>(defaultUpdateButtonAttributes);
    const [ updateUBtnAttri, setUpdateUBtnAttri ]   = useState<IPreRoundedButtonAttributes>(defaultUpdateButtonAttributes);
    const [ authBtnAttri, setAuthBtnAttri ]         = useState<IPreRoundedButtonAttributes>(defaultAuthButtonAttributes);
    const [ sendBtnAttri, setSendBtnAttri ]         = useState<IPreRoundedButtonAttributes>(defaultSendButtonAttributes);

    const onClickLogOutHandler = async () => {
        setLogOutBtnAttri({...logOutBtnAttri, props: {...logOutBtnAttri.props, isLoading: true}});
        let status: number = (await Middleware.getStatus(URAPI.getClear())).status;
        setLogOutBtnAttri({...logOutBtnAttri, props: {...logOutBtnAttri.props, isLoading: false}});
        if (status === 2000)
            window.location.href='/';
    };

    const onChangeUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = e.currentTarget.value;
        if (value.match(/^[a-z\d]{5,12}$/)) {
            setUsernameAttri({...defaultNewUsernameAttributes, props: {...usernameAttri.props, value, helperText: 'Okay.'}});
            setUpdateUBtnAttri({...updateEBtnAttri, props: {...updateUBtnAttri.props, disabled: false}});
        } else if (value === '') {
            setUsernameAttri({...defaultNewUsernameAttributes});
            setUpdateUBtnAttri({...updateEBtnAttri, props: {...updateUBtnAttri.props, disabled: true}});
        } else {
            setUsernameAttri({style: {...usernameAttri.style, borderColor: 'red', helperColor: 'red'},
                            props: {...defaultNewUsernameAttributes.props, value, helperText: '5-12 alphanumeric characters only. Do not use any illegal character.'}});
            setUpdateUBtnAttri({...updateEBtnAttri, props: {...updateUBtnAttri.props, disabled: true}});
        };
    };

    const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = e.currentTarget.value;
        if (value.match(/^([a-z\d]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)) {
            setEmailAttri({...defaultNewEmailAttributes, props: {...emailAttri.props, value, helperText: 'Okay.'}});
            setUpdateEBtnAttri({...updateEBtnAttri, props: {...updateUBtnAttri.props, disabled: false}});
        } else if (value === '') {
            setEmailAttri({...defaultNewEmailAttributes});
            setUpdateEBtnAttri({...updateEBtnAttri, props: {...updateUBtnAttri.props, disabled: true}});
        } else {
            setEmailAttri({style: {...emailAttri.style, borderColor: 'red', helperColor: 'red'},
                        props: {...defaultNewEmailAttributes.props, value, helperText: 'Do not use any illegal character. Do not enter invalid forms of email address.'}});
            setUpdateEBtnAttri({...updateEBtnAttri, props: {...updateUBtnAttri.props, disabled: true}});
        };
    };

    const onClickUpdateUsernameHandler = async () => {
        setUpdateUBtnAttri({...updateUBtnAttri, props: {...updateUBtnAttri.props, isLoading: true}});
        let payload: IUsername = { username: usernameAttri.props.value };
        let status: number = (await Middleware.getStatus(URAPI.getUsername(payload))).status;
        if (status === 2000)
            window.location.href='/profile';
        else if (status === 3003)
            setUsernameAttri({style: {...usernameAttri.style, borderColor: 'red', helperColor: 'red'},
                            props: {...usernameAttri.props, helperText: 'The username has been registered.'}})
        else
            throw new Error('Unknown Error');
        setUpdateUBtnAttri({...updateUBtnAttri, props: {...updateUBtnAttri.props, isLoading: false}});
    };

    const onClickUpdateEmailHandler = async () => {
        setUpdateEBtnAttri({...updateEBtnAttri, props: {...updateEBtnAttri.props, isLoading: true}});
        let payload: IEmail = { email: emailAttri.props.value };
        let status: number = (await Middleware.getStatus(URAPI.postEmail(payload))).status;
        if (status === 2000)
            window.location.href='/profile';
        else if (status === 3004)
            setEmailAttri({style: {...emailAttri.style, borderColor: 'red', helperColor: 'red'},
                        props: {...emailAttri.props, helperText: 'The email has been bound to an existing account.'}})
        else
            throw new Error('Unknown Error');
        setUpdateEBtnAttri({...updateEBtnAttri, props: {...updateEBtnAttri.props, isLoading: false}});
    };

    const onChangeCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = e.currentTarget.value;
        if (!value) {
            setCodeAttri({...defaultCodeAttributes});
            setAuthBtnAttri({...authBtnAttri, props: {...authBtnAttri.props, disabled: true}});
        } else if (isNaN(parseInt(value, 10))) {
            setCodeAttri({style: {...codeAttri.style, borderColor: 'red', helperColor: 'red'},
                        props: {...codeAttri.props, value, helperText: 'Please enter digits only.'}});
            setAuthBtnAttri({...authBtnAttri, props: {...authBtnAttri.props, disabled: true}});
        } else {
            setCodeAttri({...defaultCodeAttributes, props: {...defaultCodeAttributes.props, value, isRequired: false, helperText: 'Okay.'}});
            setAuthBtnAttri({...authBtnAttri, props: {...authBtnAttri.props, disabled: false}});
        };
    };

    const onClickSendHandler = async () => {
        try {
            setSendBtnAttri({...sendBtnAttri, props: {...sendBtnAttri.props, disabled: true}});
            let status: number = (await Middleware.getStatus(UGAPI.getCode())).status;
            if (status === 2000)
                setCodeAttri({...codeAttri, props: {...codeAttri.props, helperText: 'The code has been sent to your email address.'}});
        } catch (e) {
            alert('The email address may be invalid. Please check if you attempted to authenticate a valid email address.');
        };
        setTimeout(() => { setSendBtnAttri({...sendBtnAttri, props: {...sendBtnAttri.props, disabled: false}}) }, 30000);
    };

    const onClickAuthHandler = async () => {
        setAuthBtnAttri({...authBtnAttri, props: {...authBtnAttri.props, isLoading: true}});
        let payload: ICode = { code: parseInt(codeAttri.props.value, 10) };
        let status: number = (await Middleware.getStatus(UGAPI.postCode(payload))).status;
        setAuthBtnAttri({...authBtnAttri, props: {...authBtnAttri.props, isLoading: false}});
        if (status === 2000)
            window.location.href='/profile';
    };

    return (
        <>
            <StyledLogoContainer>
                <Logo {...{style: defaultLogoAttributes.style,
                        props: defaultLogoAttributes.props}} />
            </StyledLogoContainer>
            <StyledLogOutContainer>
                <Button {...{style: logOutBtnAttri.style,
                            props: logOutBtnAttri.props,
                            onClickHandler: onClickLogOutHandler}} />
            </StyledLogOutContainer>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ height: '50%' }}>
                <StyledProfileImageContainer {...{identity: user.getIdentity()}}>
                    <img src={user.getMediumImage()} alt='profile' />
                </StyledProfileImageContainer>
                <GlobalStyled.Text.AutoWidthAutoHeightNonMargin style={{
                    fontSize: '18px',
                    marginBottom: '3px',
                    }}>
                    {user.getName()}
                </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                <GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                    {user.getEmail()}
                    <span style={{
                        color: '#FFF',
                        backgroundColor: user.getIsEmailAuthed() ? '#149E9A':'#931621',
                        padding: '3px',
                        borderRadius: '3px',
                        fontSize: '10px',
                        marginLeft: '3px',
                        }}>
                        {user.getIsEmailAuthed() ? 'AUTHED':'UNAUTHED'}
                    </span>
                </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByRowSpaced style={{ height: '10%' }}>
                <Input {...{style: usernameAttri.style,
                            props: usernameAttri.props,
                            onChangeHandler: onChangeUsernameHandler}} />
                <Button {...{style: updateUBtnAttri.style,
                            props: updateUBtnAttri.props,
                            onClickHandler: onClickUpdateUsernameHandler}} />
            </GlobalStyled.Box.CenterBoxByRowSpaced>
            <GlobalStyled.Box.CenterBoxByRowSpaced style={{ height: '10%' }}>
                <Input {...{style: emailAttri.style,
                            props: emailAttri.props,
                            onChangeHandler: onChangeEmailHandler}} />
                <Button {...{style: updateEBtnAttri.style,
                            props: updateEBtnAttri.props,
                            onClickHandler: onClickUpdateEmailHandler}} />
            </GlobalStyled.Box.CenterBoxByRowSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ height: '25%' }}>
                {
                    user.getIsEmailAuthed() ? null:(
                        <>
                            <Input {...{style: codeAttri.style,
                                        props: codeAttri.props,
                                        onChangeHandler: onChangeCodeHandler}} />
                            <GlobalStyled.Box.CenterBoxByRowSpaced style={{ height: 'auto' }}>
                                <Button {...{style: sendBtnAttri.style,
                                            props: sendBtnAttri.props,
                                            onClickHandler: onClickSendHandler}} />
                                <Button {...{style: authBtnAttri.style,
                                            props: authBtnAttri.props,
                                            onClickHandler: onClickAuthHandler}} />
                            </GlobalStyled.Box.CenterBoxByRowSpaced>
                        </>
                    )
                }
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{
                backgroundColor: 'transparent',
                color: '#000',
                height: '5%',
                }}>
                <GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                    ®2019 UWC (CSC) Virtual Reality
                </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
        </>
    );
};

export default Account;