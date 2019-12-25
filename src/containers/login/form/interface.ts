import {
    EmailInterface,
    UsernameInterface,
    PasswordInterface,
} from '../../global/user/interface';
import {
    LabelEffectInputProps,
    LabelEffectInputStyle,
} from '../../components/input/labelEffect/interface';
import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../components/button/rounded/interface';

export interface LocalInputAttributes {
    style: LabelEffectInputStyle,
    props: LabelEffectInputProps,
};

export interface AccountConfirmation {
    account: EmailInterface | UsernameInterface;
    isConfirmed: boolean;
};

export interface PasswordConfirmation {
    password: PasswordInterface;
    isConfirmed: boolean;
};

export interface LocalButtonAttributes {
    style: RoundedButtonStyle;
    props: RoundedButtonProps;
};