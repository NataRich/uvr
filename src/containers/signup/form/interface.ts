import {
    EmailInterface,
    UsernameInterface,
    PasswordInterface,
} from '../../../global/user/interface';

interface IAggregateStatus {
    account:    boolean;
    password:   boolean;
};

export interface AccountCreation {
    account:    EmailInterface & UsernameInterface;
    password:   PasswordInterface;
    isOkay:     IAggregateStatus;
};