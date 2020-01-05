import {
    EmailInterface,
    UsernameInterface,
    PasswordInterface,
} from '../../../global/user/interface';

export interface IAccountConfirmation {
    account: EmailInterface | UsernameInterface;
    isConfirmed: boolean;
};

export interface IPasswordConfirmation {
    password: PasswordInterface;
    isConfirmed: boolean;
};

export interface IStyledBoxProp {
    isConfirmed: boolean;
};