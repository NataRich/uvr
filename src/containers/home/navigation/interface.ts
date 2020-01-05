import { UserClassType } from '../../../global/user/class';

export interface INavProps {
    user:           UserClassType | null;
    isFetchingUser: boolean;
};
