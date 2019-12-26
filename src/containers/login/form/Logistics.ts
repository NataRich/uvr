import { UserGeneralAPI } from '../../../global/user/request';
import { APIMiddlewares } from '../../../middlewares/API/APIMiddlewares';
import { LabelEffectInputStyle } from '../../../components/input/labelEffect/interface';
import { RoundedButtonStyle } from '../../../components/button/rounded/interface';
import {
    AccountConfirmation,
    LocalInputAttributes,
    LocalButtonAttributes,
    PasswordConfirmation,
} from './interface';

export const API        = new UserGeneralAPI();
export const Middleware = new APIMiddlewares();

const defaultInputStyle: LabelEffectInputStyle = {
    borderColor: '#18626B',
    borderRadius: 5,
    fontSize: 16,
    helperColor: undefined,
    width: 250,
};

const defaultAccountAttributes: LocalInputAttributes = {
    style: defaultInputStyle,
    props: {
        helperText: 'Enter maximum 12-character username or your email address.',
        isRequired: true,
        placeholder: 'Account',
        type: 'text',
        value: '',
    },
};

const defaultPasswordAttributes: LocalInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Password',
        type: 'password',
        value: '',
    },
};

const defaultAccount: AccountConfirmation = {
    account: {
        username: '',
    },
    isConfirmed: false,
};

const defaultPassword: PasswordConfirmation = {
    password: {
        password: '',
    },
    isConfirmed: false,
};




const defaultButtonStyle: RoundedButtonStyle = {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#1C3144',
    fontColor: '#FFF',
    fontSize: 16,
    invertColorH: false,
    loadingBorderColor: '#18626B',
};

const defaultConfirmButtonAttri: LocalButtonAttributes = {
    style: defaultButtonStyle,
    props: {
        defaultValue: 'Confirm',
        disabled: true,
        isLoading: false,
    },
};

const defaultLogInButtonAttri: LocalButtonAttributes = {
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