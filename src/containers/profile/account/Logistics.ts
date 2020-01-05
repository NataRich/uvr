import {
    LogoProps,
    LogoStyle,
} from '../../../components/UVRLogo/interface';
import {
    LabelEffectInputProps,
    LabelEffectInputStyle,
} from '../../../components/input/labelEffect/interface';
import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../../components/button/rounded/interface';

export type LogoAttributes = {
    style: LogoStyle;
    props: LogoProps;
};

export type LocalInputAttributes = {
    style: LabelEffectInputStyle;
    props: LabelEffectInputProps;
};

export type LocalRButtonAttributes = {
    style: RoundedButtonStyle;
    props: RoundedButtonProps;
};

const defaultLogoAttributes: LogoAttributes = {
    style: {
        position: 'LHS',
    },
    props: {},
};

const defaultLogOutBtnAttributes: LocalRButtonAttributes = {
    style: {
        width: 70,
        height: 40,
        borderColor: 'transparent',
        borderRadius: 5,
        borderWidth: 5,
        backgroundColor: '#931621',
        fontColor: '#FFF',
        fontSize: 14,
        invertColorH: false,
        loadingBorderColor: '',
    },
    props: {
        defaultValue: 'Log Out',
        disabled: false,
        isLoading: false,
    },
};

const defaultInputStyle: LabelEffectInputStyle = {
    borderColor: '#18626B',
    borderRadius: 5,
    fontSize: 14,
    helperColor: undefined,
    width: 190,
};

const defaultNewUsernameAttributes: LocalInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: false,
        placeholder: 'New Username',
        type: 'text',
        value: '',
    },
};

const defaultNewEmailAttributes: LocalInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: false,
        placeholder: 'New Email',
        type: 'text',
        value: '',
    },
};

const defaultCodeAttributes: LocalInputAttributes = {
    style: defaultInputStyle,
    props: {
        isRequired: true,
        placeholder: 'Code',
        type: 'text',
        value: ''
    },
};

const defaultButtonStyle: RoundedButtonStyle = {
    width: 70,
    height: 40,
    borderColor: 'transparent',
    borderRadius: 5,
    borderWidth: 5,
    backgroundColor: '#1C3144',
    fontColor: '#FFF',
    fontSize: 14,
    invertColorH: false,
    loadingBorderColor: '#18626B',
};

const defaultUpdateButtonAttributes: LocalRButtonAttributes = {
    style: defaultButtonStyle,
    props: {
        defaultValue: 'Update',
        disabled: true,
        isLoading: false,
    },
};

const defaultSendButtonAttributes: LocalRButtonAttributes = {
    style: defaultButtonStyle,
    props: {
        defaultValue: 'Send',
        disabled: false,
        isLoading: false,
    },
};

const defaultAuthButtonAttributes: LocalRButtonAttributes = {
    style: defaultButtonStyle,
    props: {
        defaultValue: 'Auth',
        disabled: true,
        isLoading: false,
    },
};

export {
    defaultLogoAttributes,
    defaultLogOutBtnAttributes,
    defaultNewUsernameAttributes,
    defaultNewEmailAttributes,
    defaultCodeAttributes,
    defaultUpdateButtonAttributes,
    defaultSendButtonAttributes,
    defaultAuthButtonAttributes,
};