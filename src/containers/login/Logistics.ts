import {
    LabelEffectInputProps,
    LabelEffectInputStyle,
} from '../../components/input/labelEffect/interface';
import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../components/button/rounded/interface';

const defaultInputStyle: LabelEffectInputStyle = {
    borderColor: '#149E9A',
    borderRadius: 5,
    fontSize: 16,
    helperColor: undefined,
    width: 250,
};

const defaultAccountProps: LabelEffectInputProps = {
    helperText: 'Enter your username or email address',
    isRequired: true,
    placeholder: 'Account',
    value: '',
};

const defaultPasswordProps: LabelEffectInputProps = {
    isRequired: true,
    placeholder: 'Password',
    value: '',
};

const defaultButtonStyle: RoundedButtonStyle = {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#1C3144',
    fontColor: '#FFF',
};

const defaultConfirmButtonProps: RoundedButtonProps = {
    defaultValue: 'Confirm',
    isLoading: false,
};

const defaultLogInButtonProps: RoundedButtonProps = {
    defaultValue: 'Log In',
    isLoading: false,
};

export {
    defaultAccountProps,
    defaultPasswordProps,
    defaultInputStyle,
    defaultConfirmButtonProps,
    defaultLogInButtonProps,
    defaultButtonStyle,
};