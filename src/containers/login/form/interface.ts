import {
    IEmail,
    IUsername,
    IPassword,
} from '../../../global/user/interface';

export interface IAccountConfirmation {
    account:        IEmail | IUsername;
    isConfirmed:    boolean;
};

export interface IPasswordConfirmation {
    password:       IPassword;
    isConfirmed:    boolean;
};

export interface IStyledBoxProp {
    isConfirmed: boolean;
};