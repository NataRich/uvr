import {
    EmailInterface,
    UsernameInterface,
    PasswordInterface,
} from '../../../global/user/interface';
import {
    ILabelEffectInputProps,
    ILabelEffectInputStyle,
} from '../../../components/input/labelEffect/interface';
import {
    IRoundedButtonProps,
    IRoundedButtonStyle,
} from '../../../components/button/rounded/interface';

export interface LocalInputAttributes {
    style: ILabelEffectInputStyle,
    props: ILabelEffectInputProps,
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
    style: IRoundedButtonStyle;
    props: IRoundedButtonProps;
};