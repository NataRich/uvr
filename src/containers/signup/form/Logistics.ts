import { LabelEffectInputStyle } from '../../../components/input/labelEffect/interface';
import {
    LocalButtonAttributes,
    LocalInputAttributes,
    AccountCreation,
} from './interface';

const defaultAccount: AccountCreation = {
    account: {
        username: '',
        email: '',
    },
    password: {
        password: ''
    },
    isOkay: {
        account: false,
        password: false,
    },
};

const defaultInputStyle: LabelEffectInputStyle = {
    borderColor: '#18626B',
    borderRadius: 5,
    fontSize: 18,
    helperColor: undefined,
    width: 250,
};

const defaultUsernameAttributes: LocalInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Username',
        type: 'text',
        value: '',
    },
};

const defaultEmailAttributes: LocalInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Email',
        type: 'text',
        value: '',
    },
};

const defaultPasswordOneAttributes: LocalInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Password',
        type: 'password',
        value: '',
    },
};

const defaultPasswordTwoAttributes: LocalInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Confirm Password',
        type: 'password',
        value: '',
    },
};

const defaultCreateBtnAttributes: LocalButtonAttributes = {
    style: {
        width: 200,
        height: 40,
        borderColor: 'transparent',
        borderRadius: 5,
        borderWidth: 5,
        backgroundColor: '#1C3144',
        fontColor: '#FFF',
        fontSize: 18,
        invertColorH: false,
        loadingBorderColor: '#18626B',
    },
    props: {
        defaultValue: 'Create Account',
        disabled: false,
        isLoading: false,
    },
};

export {
    defaultAccount,
    defaultUsernameAttributes,
    defaultEmailAttributes,
    defaultPasswordOneAttributes,
    defaultPasswordTwoAttributes,
    defaultCreateBtnAttributes,
};