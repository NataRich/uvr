import React, { useState, useEffect } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import Input from '../../../components/input/labelEffect/Input';
import Button from '../../../components/button/rounded/RoundedButton';
import {
    AccountConfirmation,
    LocalInputAttributes,
    LocalButtonAttributes,
    PasswordConfirmation,
} from './interface';
import {
    defaultAccount,
    defaultPassword,
    defaultAccountAttributes,
    defaultPasswordAttributes,
    defaultConfirmButtonAttri,
    defaultLogInButtonAttri,
} from './Logistics';
import { API, Middleware } from './Logistics';
import {
    StyledBox,
    StyledTextBox,
} from './Form.style';

const Form: React.FC = () => {
    const [ accountAttri, setAccountAttri ]             = useState<LocalInputAttributes>(defaultAccountAttributes);
    const [ passwordAttri, setPasswordAttri ]           = useState<LocalInputAttributes>(defaultPasswordAttributes);
    const [ confirmButtonAttri, setConfirmButtonAttri ] = useState<LocalButtonAttributes>(defaultConfirmButtonAttri);
    const [ logInButtonAttri, setLoginButtonAttri ]     = useState<LocalButtonAttributes>(defaultLogInButtonAttri);
    const [ account, setAccount ]                       = useState<AccountConfirmation>(defaultAccount);
    const [ password, setPassword ]                     = useState<PasswordConfirmation>(defaultPassword);

    const onChangeAccountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        if (value.match(/^[a-z\d]{5,12}$/)) {
            setAccountAttri({...defaultAccountAttributes, 
                            props: {...defaultAccountAttributes.props, value: value, helperText: 'Okay.'}});
            setConfirmButtonAttri({...defaultConfirmButtonAttri,
                                props: {...defaultConfirmButtonAttri.props, disabled: false}});
            setAccount({...defaultAccount, account: {username: value}});
        } else if (value.match(/^([a-z\d]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)) {
            setAccountAttri({...defaultAccountAttributes, 
                            props: {...defaultAccountAttributes.props, value: value, helperText: 'Okay.'}});
            setConfirmButtonAttri({...defaultConfirmButtonAttri,
                                props: {...defaultConfirmButtonAttri.props, disabled: false}});
            setAccount({...defaultAccount, account: {email: value}});
        } else if (value === '') {
            setAccountAttri({...defaultAccountAttributes});
            setConfirmButtonAttri({...defaultConfirmButtonAttri});
            setAccount({...defaultAccount});
        } else {
            setAccountAttri({...defaultAccountAttributes,
                            style: {...defaultAccountAttributes.style, borderColor: 'red', helperColor: 'red'},
                            props: {...defaultAccountAttributes.props, value: value, helperText: '5-12 character username only. Do not enter illegal characters or illegal forms of email address.'}});
            setConfirmButtonAttri({...defaultConfirmButtonAttri});
            setAccount({...defaultAccount});
        };
    };

    const onClickConfirmHandler = async () => {
        // Confirm if the account exists
        setConfirmButtonAttri({...confirmButtonAttri, 
                            props: {...confirmButtonAttri.props, isLoading: true}});
        let status: number = (await Middleware.getStatus(API.postUsernameOrEmail(account.account))).status;
        setConfirmButtonAttri({...confirmButtonAttri, 
                            props: {...confirmButtonAttri.props, isLoading: false}});
        if (status === 3008)
            setAccountAttri({...accountAttri, 
                            style: {...accountAttri.style, helperColor: 'red', borderColor: 'red'},
                            props: {...accountAttri.props, helperText: 'Argument interface failed to match.'}});
        else if (status === 3001)
            setAccountAttri({...accountAttri, 
                            style: {...accountAttri.style, helperColor: 'red', borderColor: 'red'},
                            props: {...accountAttri.props, helperText: 'The account does not exist.'}});
        else if (status === 2000) {
            setAccountAttri({...accountAttri,
                            style: {...accountAttri.style, borderColor: '#149E9A'},
                            props: {...accountAttri.props, helperText: 'Confirmed.'}});
            setAccount({...account, isConfirmed: true})
        } else
            throw 'Unknown Error';
    };

    const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        if (value.match(/^[a-z\d]{8,}$/)) {
            setPasswordAttri({...defaultPasswordAttributes, 
                            props: {...defaultPasswordAttributes.props, value: value, helperText: 'Okay.'}});
            setLoginButtonAttri({...defaultLogInButtonAttri,
                                props: {...defaultLogInButtonAttri.props, disabled: false}});
            setPassword({...defaultPassword, password: {password: value}});
        } else if (value === '') {
            setPasswordAttri({...defaultPasswordAttributes});
            setLoginButtonAttri({...defaultLogInButtonAttri});
            setPassword({...defaultPassword});
        } else {
            setPasswordAttri({...defaultPasswordAttributes,
                            style: {...defaultPasswordAttributes.style, borderColor: 'red', helperColor: 'red'},
                            props: {...defaultPasswordAttributes.props, value: value, helperText: 'At least 8 characters. Do not enter illegal characters.'}});
            setLoginButtonAttri({...defaultLogInButtonAttri});
            setPassword({...defaultPassword});
        };
    };

    const onClickLogInHandler = async () => {
        // Confirm if the password is correct
        setLoginButtonAttri({...logInButtonAttri,
                            props: {...logInButtonAttri.props, isLoading: true}});
        let status: number = (await Middleware.getStatus(API.postPassword(password.password))).status;
        setLoginButtonAttri({...logInButtonAttri,
                            props: {...logInButtonAttri.props, isLoading: false}});
        if (status === 3005)
            setPasswordAttri({...passwordAttri,
                            style: {...passwordAttri.style, borderColor: 'red', helperColor: 'red'},
                            props: {...passwordAttri.props, helperText: 'Please reenter your account above.'}});
        else if (status === 3008)
            setPasswordAttri({...passwordAttri,
                            style: {...passwordAttri.style, borderColor: 'red', helperColor: 'red'},
                            props: {...passwordAttri.props, helperText: 'Argument interface failed to match.'}});
        else if (status === 3000) 
            setPasswordAttri({...passwordAttri,
                            style: {...passwordAttri.style, borderColor: 'red', helperColor: 'red'},
                            props: {...passwordAttri.props, helperText: 'The password is incorrect.'}});
        else if (status === 2000) {
            setPasswordAttri({...passwordAttri,
                            style: {...passwordAttri.style, borderColor: '#149E9A'},
                            props: {...passwordAttri.props, helperText: 'Confirmed.'}});
            setPassword({...password, isConfirmed: true});
        } else
            throw 'Unknown Error';
    };

    useEffect(() => {
        if (password.isConfirmed)
            window.location.href = '/';
    }, [password.isConfirmed])

    return (
        <>
            <div>
                <p style={{fontSize: '30px'}}>Log In</p>
            </div>
            <StyledTextBox>
                <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                    Welcome Back
                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                    Enjoy our VR experience!
                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
            </StyledTextBox>
            <div>
                <Input {...{style: accountAttri.style, 
                            props: accountAttri.props, 
                            onChangeHandler: onChangeAccountHandler}}
                            />
            </div>
            <StyledBox {...{isConfirmed: account.isConfirmed}}>
                <div className='con-form-container'>
                    <Button {...{style: confirmButtonAttri.style, 
                            props: confirmButtonAttri.props, 
                            onClickHandler: onClickConfirmHandler}}
                            />
                </div>
                <div className='con-form-container'>
                    <Input {...{style: passwordAttri.style, 
                        props: passwordAttri.props, 
                        onChangeHandler: onChangePasswordHandler}}
                        />
                    <Button {...{style: logInButtonAttri.style, 
                        props: logInButtonAttri.props, 
                        onClickHandler: onClickLogInHandler}}
                    />
                </div>
            </StyledBox>
        </>
    );
};

export default Form;