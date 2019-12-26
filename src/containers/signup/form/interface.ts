import {
    EmailInterface,
    UsernameInterface,
    PasswordInterface,
} from '../../../global/user/interface';
import {
    LabelEffectInputProps,
    LabelEffectInputStyle,
} from '../../../components/input/labelEffect/interface';
import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../../components/button/rounded/interface';

export interface LocalInputAttributes {
    style: LabelEffectInputStyle,
    props: LabelEffectInputProps,
};

export interface LocalButtonAttributes {
    style: RoundedButtonStyle;
    props: RoundedButtonProps;
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