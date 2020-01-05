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

export interface LocalButtonAttributes {
    style: IRoundedButtonStyle;
    props: IRoundedButtonProps;
};

interface AggregateStatusInterface {
    account:    boolean;
    password:   boolean;
};

export interface AccountCreation {
    account:    EmailInterface & UsernameInterface;
    password:   PasswordInterface;
    isOkay:     AggregateStatusInterface;
};