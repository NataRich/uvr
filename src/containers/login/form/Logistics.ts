import {
    IPreLabelEffectInputAttributes,
    IPreRoundedButtonAttributes,
} from '../../../global/utils/Style';
import { ILabelEffectInputStyle } from '../../../components/input/labelEffect/interface';
import { IRoundedButtonStyle } from '../../../components/button/rounded/interface';

import {
    IAccountConfirmation,
    IPasswordConfirmation,
} from './interface';

const defaultInputStyle: ILabelEffectInputStyle = {
    borderColor: '#18626B',
    borderRadius: 5,
    fontSize: 18,
    helperColor: undefined,
    width: 250,
};

const defaultAccountAttributes: IPreLabelEffectInputAttributes = {
    style: defaultInputStyle,
    props: {
        helperText: 'Enter maximum 12-character username or your email address.',
        isRequired: true,
        placeholder: 'Account',
        type: 'text',
        value: '',
    },
};

const defaultPasswordAttributes: IPreLabelEffectInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Password',
        type: 'password',
        value: '',
    },
};

const defaultAccount: IAccountConfirmation = {
    account: {
        username: '',
    },
    isConfirmed: false,
};

const defaultPassword: IPasswordConfirmation = {
    password: {
        password: '',
    },
    isConfirmed: false,
};

const defaultButtonStyle: IRoundedButtonStyle = {
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
};

const defaultConfirmButtonAttri: IPreRoundedButtonAttributes = {
    style: defaultButtonStyle,
    props: {
        defaultValue: 'Confirm',
        disabled: true,
        isLoading: false,
    },
};

const defaultLogInButtonAttri: IPreRoundedButtonAttributes = {
    style: defaultButtonStyle,
    props: {
        defaultValue: 'Log In',
        disabled: true,
        isLoading: false,
    },
};

export {
    defaultAccount,
    defaultPassword,
    defaultAccountAttributes,
    defaultPasswordAttributes,
    defaultConfirmButtonAttri,
    defaultLogInButtonAttri,
};