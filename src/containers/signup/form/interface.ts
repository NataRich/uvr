import {
    IEmail,
    IUsername,
    IPassword,
} from '../../../global/user/interface';

interface IAggregateStatus {
    account:    boolean;
    password:   boolean;
};

export interface AccountCreation {
    account:    IEmail & IUsername;
    password:   IPassword;
    isOkay:     IAggregateStatus;
};