import React, { useState, useEffect } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import Input from '../../../components/input/labelEffect/Input';
import Button from '../../../components/button/rounded/RoundedButton';
import {
    LocalButtonAttributes,
    LocalInputAttributes,
    AccountCreation,
} from './interface';
import {
    defaultAccount,
    defaultUsernameAttributes,
    defaultEmailAttributes,
    defaultPasswordOneAttributes,
    defaultPasswordTwoAttributes,
    defaultCreateBtnAttributes,
} from './Logistics';
import { API, Middleware } from './Logistics';
import { StyledTextBox } from './Form.style';

const Form: React.FC = () => {
    const [ usernameAttri, setUsernameAttri ]       = useState<LocalInputAttributes>(defaultUsernameAttributes);
    const [ emailAttri, setEmailAttri ]             = useState<LocalInputAttributes>(defaultEmailAttributes);
    const [ passwordOneAttri, setPasswordOneAttri ] = useState<LocalInputAttributes>(defaultPasswordOneAttributes);
    const [ passwordTwoAttri, setPasswordTwoAttri ] = useState<LocalInputAttributes>(defaultPasswordTwoAttributes);
    const [ createBtnAttri, setCreateBtnAttri ]     = useState<LocalButtonAttributes>(defaultCreateBtnAttributes);
    const [ account, setAccount ]                   = useState<AccountCreation>(defaultAccount);

    const onChangeUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        if (value.match(/^[a-z\d]{5,12}$/)) {
            setUsernameAttri({...defaultUsernameAttributes,
                            props: {...defaultUsernameAttributes.props, value, isRequired: false, helperText: 'Okay.'}});
            setAccount({...account, account: {...account.account, username: value}});
        } else if (value === '') {
            setUsernameAttri({...defaultUsernameAttributes});
            setAccount({...account, account: {...account.account, username: defaultAccount.account.username}});
        } else {
            setUsernameAttri({...defaultUsernameAttributes,
                            style: {...defaultUsernameAttributes.style, borderColor: 'red', helperColor: 'red'},
                            props: {...defaultUsernameAttributes.props, value, helperText: '5-12 alphanumeric characters only. Do not use any illegal character.'}});
            setAccount({...account, account: {...account.account, username: defaultAccount.account.username}});
        };
    };

    const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        if (value.match(/^([a-z\d]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)) {
            setEmailAttri({...defaultEmailAttributes,
                        props: {...defaultEmailAttributes.props, value, isRequired: false, helperText: 'Okay.'}});
            setAccount({...account, account: {...account.account, email: value}});
        } else if (value === '') {
            setEmailAttri({...defaultEmailAttributes});
            setAccount({...account, account: {...account.account, email: defaultAccount.account.email}});
        } else {
            setEmailAttri({...defaultEmailAttributes,
                        style: {...defaultEmailAttributes.style, borderColor: 'red', helperColor: 'red'},
                        props: {...defaultEmailAttributes.props, value, helperText: 'Do not use any illegal character. Do not enter invalid forms of email address.'}});
            setAccount({...account, account: {...account.account, email: defaultAccount.account.email}});
        };
    };

    const onChangePasswordOneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        if (value.match(/^[a-z\d]{8,}$/))
            setPasswordOneAttri({...defaultPasswordOneAttributes,
                                props: {...defaultPasswordOneAttributes.props, value, isRequired: false, helperText: 'Okay.'}})
        else if (value === '')
            setPasswordOneAttri({...defaultPasswordOneAttributes});
        else
            setPasswordOneAttri({...defaultPasswordOneAttributes,
                                style: {...defaultPasswordOneAttributes.style, borderColor: 'red', helperColor: 'red'},
                                props: {...defaultPasswordOneAttributes.props, value, helperText: 'Enter more than 8 characters. Do not use any illegal character.'}})
    };

    const onChangePasswordTwoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        if (value === passwordOneAttri.props.value) {
            setPasswordTwoAttri({...defaultPasswordTwoAttributes,
                                props: {...defaultPasswordTwoAttributes.props, value, isRequired: false, helperText: 'Okay.'}});
            setAccount({...account, password: {password: value}});
        } else if (value === '') {
            setPasswordTwoAttri({...defaultPasswordTwoAttributes});
            setAccount({...account, password: defaultAccount.password});
        } else {
            setPasswordTwoAttri({...defaultPasswordTwoAttributes,
                                style: {...defaultPasswordTwoAttributes.style, borderColor: 'red', helperColor: 'red'},
                                props: {...defaultPasswordTwoAttributes.props, value, helperText: 'Cannot match with the password just entered.'}});
            setAccount({...account, password: defaultAccount.password});
        };
    };

    const onClickCreateHandler = async () => {
        let username: string = account.account.username;
        let email: string = account.account.email;
        let password: string = account.password.password;
        if (username && email && password) {
            setCreateBtnAttri({...createBtnAttri, props: {...createBtnAttri.props, isLoading: true}});
            let accountStatus: number = (await Middleware.getStatus(API.postUsernameAndEmail(account.account))).status;
            if (accountStatus === 2000) {
                setAccount({...account, isOkay: {...account.isOkay, account: true}});
                let passwordStatus: number = (await Middleware.getStatus(API.postNewPassword(account.password))).status;
                setCreateBtnAttri({...createBtnAttri, props: {...createBtnAttri.props, isLoading: false}});
                if (passwordStatus === 2000)
                    setAccount({...account, isOkay: {...account.isOkay, password: true}});
                else if (passwordStatus === 3005) {
                    setAccount({...account, account: defaultAccount.account});
                    setUsernameAttri({...defaultUsernameAttributes,
                                    style: {...defaultUsernameAttributes.style, borderColor: 'red', helperColor: 'red'},
                                    props: {...defaultUsernameAttributes.props, helperText: 'Timeout. Please re-enter the username.'}});
                    setEmailAttri({...defaultEmailAttributes,
                                style: {...defaultEmailAttributes.style, borderColor: 'red', helperColor: 'red'},
                                props: {...defaultEmailAttributes.props, helperText: 'Timeout. Please re-enter the email address.'}});
                } else
                    throw 'Unknown Error.'
            } else if (accountStatus === 3002) {
                setCreateBtnAttri({...createBtnAttri, props: {...createBtnAttri.props, isLoading: false}});
                setAccount({...account, account: defaultAccount.account});
                setUsernameAttri({...usernameAttri,
                                style: {...usernameAttri.style, borderColor: 'red', helperColor: 'red'},
                                props: {...usernameAttri.props, helperText: 'The username has been registered.'}});
                setEmailAttri({...emailAttri,
                            style: {...emailAttri.style, borderColor: 'red', helperColor: 'red'},
                            props: {...emailAttri.props, helperText: 'The email address has been bound to an existing account.'}});
            } else if (accountStatus === 3003) {
                setCreateBtnAttri({...createBtnAttri, props: {...createBtnAttri.props, isLoading: false}});
                setAccount({...account, account: {...account.account, username: defaultAccount.account.username}});
                setUsernameAttri({...usernameAttri,
                                style: {...usernameAttri.style, borderColor: 'red', helperColor: 'red'},
                                props: {...usernameAttri.props, helperText: 'The username has been registered.'}});
            } else if (accountStatus === 3004) {
                setCreateBtnAttri({...createBtnAttri, props: {...createBtnAttri.props, isLoading: false}});
                setAccount({...account, account: {...account.account, email: defaultAccount.account.email}});
                setEmailAttri({...emailAttri,
                            style: {...emailAttri.style, borderColor: 'red', helperColor: 'red'},
                            props: {...emailAttri.props, helperText: 'The email address has been bound to an existing account.'}});
            } else
                throw 'Unknown Error';
        } else {
            if (!username)
                setUsernameAttri({...usernameAttri,
                                style: {...usernameAttri.style, borderColor: 'red', helperColor: 'red'},
                                props: {...usernameAttri.props, helperText: 'This is required.'}});
            if (!email)
                setEmailAttri({...emailAttri,
                            style: {...emailAttri.style, borderColor: 'red', helperColor: 'red'},
                            props: {...emailAttri.props, helperText: 'This is required.'}});
            if (!password) {
                setPasswordOneAttri({...passwordOneAttri,
                                    style: {...passwordOneAttri.style, borderColor: 'red', helperColor: 'red'},
                                    props: {...passwordOneAttri.props, helperText: 'This is required.'}});
                setPasswordTwoAttri({...passwordTwoAttri,
                                    style: {...passwordTwoAttri.style, borderColor: 'red', helperColor: 'red'},
                                    props: {...passwordTwoAttri.props, helperText: 'This is required.'}});
            };
        };
    };

    useEffect(() => {
        if (account.isOkay.password)
            window.location.href='/';
    }, [account.isOkay.password]);

    return (
        <>
            <div>
                <p style={{fontSize: '30px'}}>Sign Up</p>
            </div>
            <StyledTextBox>
                <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                    Start your VR experience!
                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
            </StyledTextBox>
            <GlobalStyled.Box.CenterBoxByColNonSpaced>
                <Input {...{style: usernameAttri.style,
                            props: usernameAttri.props,
                            onChangeHandler: onChangeUsernameHandler}} />
                <Input {...{style: emailAttri.style,
                            props: emailAttri.props,
                            onChangeHandler: onChangeEmailHandler}} />
                <Input {...{style: passwordOneAttri.style,
                                        props: passwordOneAttri.props,
                                        onChangeHandler: onChangePasswordOneHandler}} />
                <Input {...{style: passwordTwoAttri.style,
                            props: passwordTwoAttri.props,
                            onChangeHandler: onChangePasswordTwoHandler}} />
                <Button {...{style: createBtnAttri.style,
                            props: createBtnAttri.props,
                            onClickHandler: onClickCreateHandler}} />
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </>
    );
};

export default Form;