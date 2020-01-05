import {
    IPreLabelEffectInputAttributes,
    IPreRoundedButtonAttributes,
} from '../../../global/utils/Style';
import { ILabelEffectInputStyle } from '../../../components/input/labelEffect/interface';

import { AccountCreation } from './interface';

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

const defaultInputStyle: ILabelEffectInputStyle = {
    borderColor: '#18626B',
    borderRadius: 5,
    fontSize: 18,
    helperColor: undefined,
    width: 250,
};

const defaultUsernameAttributes: IPreLabelEffectInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Username',
        type: 'text',
        value: '',
    },
};

const defaultEmailAttributes: IPreLabelEffectInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Email',
        type: 'text',
        value: '',
    },
};

const defaultPasswordOneAttributes: IPreLabelEffectInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Password',
        type: 'password',
        value: '',
    },
};

const defaultPasswordTwoAttributes: IPreLabelEffectInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Confirm Password',
        type: 'password',
        value: '',
    },
};

const defaultCreateBtnAttributes: IPreRoundedButtonAttributes = {
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